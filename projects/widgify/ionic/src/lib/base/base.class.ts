import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WiIonBaseSettings } from './base.interface';
import { WiIonBaseComponent } from './base.component';
import { Type } from '@angular/core';

export class WiIonBase<Settings extends WiIonBaseSettings = WiIonBaseSettings> extends WidgifyBase<Settings> {
	public component = WiIonBaseComponent as Type<WiIonBaseComponent<Settings>>;

	/**
	 * The default settings for IonBase.
	 */
	public defaults: Settings = {} as Settings;

}

export const wiIonBase = <Settings extends WiIonBaseSettings = WiIonBaseSettings, Widget extends WiIonBase<Settings> = WiIonBase<Settings>>(settings?: Settings) => widgifyFn<Settings, Widget>(WiIonBase as any)(settings);