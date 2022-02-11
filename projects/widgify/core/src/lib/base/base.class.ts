import { WiSettings } from './base.interface';
import { WiBaseComponent } from './base.component';
import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type WiChildFn
    <
    Parent extends WiBase<WiSettings, any>,
    DataType extends any = any,
    > = ((parent: Parent, data?: DataType) => WiBase)
    | WiBase;

export type WiChild
    <
    Parent extends WiBase,
    DataType extends any = any,
    > = WiChildFn<Parent, DataType>
    | [string, WiChildFn<Parent, DataType>]
    | [WiChildFn<Parent, DataType>, string];

export class WiBase
    <
    Settings extends WiSettings = WiSettings,
    DataType extends any = null,
    Widget extends WiBase<Settings, DataType> = any,
    Props = any
    > {

    public component: Type<WiBaseComponent<Settings, DataType, Widget>> = WiBaseComponent;

    constructor(
        public initialSettings?: Settings,
        public initialProps?: Props
    ) {
        this.setSettings(initialSettings);
        this.setProps(initialProps);
    }

    public defaults: Settings = {} as Settings;
    public settings$ = new BehaviorSubject<Settings>(this.defaults);

    public get settings() {
        return this.settings$.value;
    }

    public setSettings(settings?: Settings) {
        this.settings$.next(settings);
    }

    public updateSettings(settings?: Partial<Settings>) {
        if (settings) {

            const updatedSettings = {
                ...this.settings,
                ...settings
            };

            this.settings$.next(updatedSettings);
        }
        return this;
    }

    public props$ = new BehaviorSubject<Props>({} as Props);

    public get props() {
        return this.props$.value;
    }

    public setProps(props?: Props) {
        this.props$.next(props);
    }

    public updateProps(props?: Partial<Props>) {
        if (props) {

            const updatedProps = {
                ...this.props,
                ...props
            };

            this.props$.next(updatedProps);
        }
        return this;
    }

    public children$ = new BehaviorSubject<WiChild<Widget, DataType>[]>([]);

    public get children() {
        return this.children$.value;
    };

    public content(...widgets: WiChild<Widget, DataType>[]) {
        this.children$.next(widgets);
        return this;
    }

    public insertChild(..._widgets: WiChild<Widget, DataType>[]) {
        const children = [...this.children];
        children.push(..._widgets);
        this.children$.next(children);
        return this;
    }

    public removeChild(index: number) {
        const children = [...this.children];
        children.splice(index, 1)
        this.children$.next(children);
        return this;
    }

    public removeChildById(id: string) {
        const children = this.children.filter(child => !(Array.isArray(child) && (child[0] === id || child[1] === id)))
        this.children$.next(children);
        return this;
    }

}

export const wiBase =
    <Props, DataType = null>(settings?: WiSettings, props?: Props) =>
        new WiBase(settings, props) as WiBase<Props, DataType>;

export const wiBaseFn =
    <
        Settings extends WiSettings = WiSettings,
        DataType extends any = null,
        Widget extends WiBase<Settings, DataType> = any,
        Props = any
    >(widget: Type<Widget>) =>
        (settings?: WiSettings, props?: Props) =>
            new widget(settings, props) as Widget;
