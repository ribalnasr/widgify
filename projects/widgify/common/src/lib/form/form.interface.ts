import { FormBuilder, FormGroup } from '@angular/forms';
import { WidgifySettings } from '@widgify/core';

export interface WidgifyFormSettings extends WidgifySettings {
	formGroup?: (formBuilder: FormBuilder) => FormGroup;
}
