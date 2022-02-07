import { WidgifyBase } from '@widgify/core';
import { WidgifyFormSettings } from './form.interface';
import { WidgifyFormComponent } from './form.component';

export class WidgifyForm extends WidgifyBase<WidgifyFormSettings> {
	public component = WidgifyFormComponent;
	public defaults: WidgifyFormSettings = {};

}

export const widgifyForm = (settings: WidgifyFormSettings) => new WidgifyForm(settings);