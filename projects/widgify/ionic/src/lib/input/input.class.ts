import { WiIonInputSettings } from './input.interface';
import { WiIonInputComponent } from './input.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';


export class WiIonInput<Props = any> extends WiIonBase<WiIonInputSettings, null, WiIonInput<Props>, Props> {
	public component = WiIonInputComponent;
	public defaults: WiIonInputSettings = {};
}

export const wiIonInput =
	wiBaseFn<WiIonInputSettings, null, WiIonInput<any>, any>(WiIonInput);