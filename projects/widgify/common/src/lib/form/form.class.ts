import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyFormSettings } from './form.interface';
import { WidgifyFormComponent } from './form.component';
import { FormGroup } from '@angular/forms';

export class WidgifyForm extends WidgifyBase<WidgifyFormSettings, FormGroup, WidgifyForm> {
	public component = WidgifyFormComponent;
	public defaults: WidgifyFormSettings = {};

}


export const widgifyForm = widgifyFn<WidgifyFormSettings, WidgifyForm>(WidgifyForm);
