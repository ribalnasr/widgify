import { WidgifySettings } from './base.interface';
import { WidgifyBaseComponent } from './base.component';
import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class WidgifySettingsBase<
    Settings extends WidgifySettings = WidgifySettings,
    DataType extends any = any,
    Widget extends WidgifyBase<Settings, DataType> = any
    >  {

    public component: Type<WidgifyBaseComponent<Settings, DataType, Widget>> = WidgifyBaseComponent;
    public defaults: Settings = {} as WidgifySettings as Settings;

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


export type WidgifyChildFn
    <
    Parent extends WidgifyBase,
    DataType extends any = any
    > = ((parent: Parent, data?: DataType) => WidgifyBase)
    | WidgifyBase;

export type WidgifyChild
    <
    Parent extends WidgifyBase,
    DataType extends any = any
    > = WidgifyChildFn<Parent, DataType>
    | [string, WidgifyChildFn<Parent, DataType>]
    | [WidgifyChildFn<Parent, DataType>, string];

export class WidgifyBase
    <
    Settings extends WidgifySettings = WidgifySettings,
    DataType extends any = any,
    Widget extends WidgifyBase<Settings, DataType> = any
    >
    extends WidgifySettingsBase<Settings>  {



    public children$ = new BehaviorSubject<WidgifyChild<Widget, DataType>[]>([]);

    public get children() {
        return this.children$.value;
    };

    public content(...widgets: WidgifyChild<Widget, DataType>[]) {
        this.children$.next(widgets);
        return this;
    }

    public insertChild(..._widgets: WidgifyChild<Widget, DataType>[]) {
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


export function widgifyFn<Settings extends WidgifySettings = WidgifySettings, Widget extends WidgifyBase<Settings> = WidgifyBase<Settings>>(widget: Type<Widget>) {
    return (settings?: Settings) => new widget(settings) as Widget;
}

export const widgifyBase = widgifyFn(WidgifyBase);



