import { WiBase, wiBaseFn } from '@widgify/core';
import { WiIonBaseSettings } from './base.interface';
import { WiIonBaseComponent } from './base.component';
import { Type } from '@angular/core';

export class WiIonBase<
	Settings extends WiIonBaseSettings = WiIonBaseSettings,
	DataType extends any = any,
	Widget extends WiIonBase<Settings, DataType> = any,
	Props = any
	> extends WiBase<Settings, DataType, Widget, Props> {
	public component: Type<WiIonBaseComponent<Settings, DataType, Widget>> = WiIonBaseComponent
	public defaults: Settings = {} as Settings;
}

export const wiIonBase =
	wiBaseFn<WiIonBaseSettings, null, WiIonBase<WiIonBaseSettings, null>, any>(WiIonBase);