import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyFormSettings } from './form.interface';
import { WidgifyFormComponent } from './form.component';

export class WidgifyForm extends WidgifyBase<WidgifyFormSettings> {
	public component = WidgifyFormComponent;
	public defaults: WidgifyFormSettings = {};

}


export const widgifyForm = widgifyFn<WidgifyFormSettings, WidgifyForm>(WidgifyForm);
