import { FormBuilder, FormGroup } from '@angular/forms';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyFormSettings extends WidgifySettings {
	formGroup?: (formBuilder: FormBuilder) => FormGroup;
	content?: (formGroup: FormGroup) => WidgifyBase;
}
