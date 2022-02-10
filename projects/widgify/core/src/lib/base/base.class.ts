import { WiSettings } from './base.interface';
import { WiBaseComponent } from './base.component';
import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class WiSettingsBase<
    Settings extends WiSettings = WiSettings,
    DataType extends any = any,
    Widget extends WiBase<Settings, DataType> = any
    >  {

    public component: Type<WiBaseComponent<Settings, DataType, Widget>> = WiBaseComponent;
    public defaults: Settings = {} as WiSettings as Settings;

    public settings$ = new BehaviorSubject<Settings>(this.defaults);

    public get settings() {
        return this.settings$.value;
    }

    constructor(
        settings?: Settings
    ) {
        this.updateSettings(settings)
    }

    updateSettings(settings?: Settings) {
        if (settings) {

            const updatedSettings = {
                ...this.settings,
                ...settings
            };

            this.settings$.next(updatedSettings);
        }
        return this;
    }

}


export type WiChildFn
    <
    Parent extends WiBase,
    DataType extends any = any
    > = ((parent: Parent, data?: DataType) => WiBase)
    | WiBase;

export type WiChild
    <
    Parent extends WiBase,
    DataType extends any = any
    > = WiChildFn<Parent, DataType>
    | [string, WiChildFn<Parent, DataType>]
    | [WiChildFn<Parent, DataType>, string];

export class WiBase
    <
    Settings extends WiSettings = WiSettings,
    DataType extends any = any,
    Widget extends WiBase<Settings, DataType> = any
    >
    extends WiSettingsBase<Settings>  {



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


export function widgifyFn<Settings extends WiSettings = WiSettings, Widget extends WiBase<Settings> = WiBase<Settings>>(widget: Type<Widget>) {
    return (settings?: Settings) => new widget(settings) as Widget;
}

export const wiBase = widgifyFn(WiBase);



