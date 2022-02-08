import { WiIonInputSettings } from './input.interface';
import { WiIonInputComponent } from './input.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WiIonInput extends WiIonBase<WiIonInputSettings> {
	public component = WiIonInputComponent;
	public defaults: WiIonInputSettings = {
		type: 'text',
		readonly: false,
		required: false
	};

}

export const wiIonInput = (settings?: WiIonInputSettings) => widgifyFn<WiIonInputSettings, WiIonInput>(WiIonInput)(settings);