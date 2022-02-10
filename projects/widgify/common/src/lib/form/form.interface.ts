import { FormBuilder, FormGroup } from '@angular/forms';
import { WiSettings } from '@widgify/core';

export interface WiFormSettings extends WiSettings {
	formGroup?: (formBuilder: FormBuilder) => FormGroup;
}
