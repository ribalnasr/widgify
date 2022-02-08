import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyIonBaseSettings } from './base.interface';
import { WidgifyIonBaseComponent } from './base.component';
import { Type } from '@angular/core';

export class WidgifyIonBase<Settings extends WidgifyIonBaseSettings = WidgifyIonBaseSettings> extends WidgifyBase<Settings> {
	public component = WidgifyIonBaseComponent as Type<WidgifyIonBaseComponent<Settings>>;

	/**
	 * The default settings for IonBase.
	 */
	public defaults: Settings = {} as Settings;

}

export const widgifyIonBase = <Settings extends WidgifyIonBaseSettings = WidgifyIonBaseSettings, Widget extends WidgifyIonBase<Settings> = WidgifyIonBase<Settings>>(settings?: Settings) => widgifyFn<Settings, Widget>(WidgifyIonBase as any)(settings);