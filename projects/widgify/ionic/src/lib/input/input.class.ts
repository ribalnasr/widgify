import { WidgifyIonInputSettings } from './input.interface';
import { WidgifyIonInputComponent } from './input.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonInput extends WidgifyIonBase<WidgifyIonInputSettings> {
	public component = WidgifyIonInputComponent;
	public defaults: WidgifyIonInputSettings = {
		type: 'text',
		readonly: false,
		required: false
	};

}

export const widgifyIonInput = (settings?: WidgifyIonInputSettings) => widgifyFn<WidgifyIonInputSettings, WidgifyIonInput>(WidgifyIonInput)(settings);