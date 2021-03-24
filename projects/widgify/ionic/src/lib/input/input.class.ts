import { WidgifyBase } from '@widgify/core';
import { WidgifyIonInputSettings } from './input.interface';
import { WidgifyIonInputComponent } from './input.component';

export class WidgifyIonInput extends WidgifyBase<WidgifyIonInputSettings> {
	public component = WidgifyIonInputComponent;
	public defaults: WidgifyIonInputSettings = {
		type: 'text',
		readonly: false,
		required: false
	};

}