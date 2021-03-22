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
    constructor(private _settings?: Settings) { }
}