import { WiIonInputSettings } from './input.interface';
import { WiIonInputComponent } from './input.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '@widgify/core';

export class WiIonInput extends WiIonBase<WiIonInputSettings, null, WiIonInput> {
	public component = WiIonInputComponent;
	public defaults: WiIonInputSettings = {
		type: 'text',
		readonly: false,
		required: false
	};

}

export const wiIonInput = (settings?: WiIonInputSettings) => widgifyFn<WiIonInputSettings, WiIonInput>(WiIonInput)(settings);