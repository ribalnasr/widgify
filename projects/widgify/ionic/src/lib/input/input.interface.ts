import { AbstractControl } from '@angular/forms';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonInputSettings extends WidgifySettings {
	value?: any;
	placeholder?: string;
	formControl?: AbstractControl;
}
