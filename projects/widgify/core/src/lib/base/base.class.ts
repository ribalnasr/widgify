import { WidgifySettings } from './base.interface';
import { WidgifyBaseComponent } from './base.component';
import { Type } from '@angular/core';

export class WidgifyBase<Settings extends WidgifySettings = WidgifySettings>  {

    public component: Type<WidgifyBaseComponent<Settings>> = WidgifyBaseComponent;
    public defaults: Settings = {} as WidgifySettings as Settings;

    public get settings() {
        return {
            ...(this.defaults || {}),
            ...this._settings
        }
    }

    public content?: WidgifyBase[] = [];

    constructor(private _settings?: Settings) {
    }

    public setContent(..._widgets: WidgifyBase[]) {
        this.content = _widgets;
        return this;
    }

    public insert(..._widgets: WidgifyBase[]) {
        this.content.push(..._widgets);
        return this;
    }
}

export function widgifyFn<Settings extends WidgifySettings = WidgifySettings, Widget extends WidgifyBase<Settings> = WidgifyBase<Settings>>(widget: Type<Widget>) {
    return (settings?: Settings) => new widget(settings) as Widget;
}

export const widgifyBase = widgifyFn(WidgifyBase);



