import { Component } from '@angular/core';
import { WidgifyIonInputSettings } from './input.interface';
import { FormControl } from '@angular/forms';
import { WidgifyIonBaseComponent } from '../base/base.component';
@Component({
	selector: 'widgify-ion-input',
	templateUrl: './input.component.html',
})
export class WidgifyIonInputComponent extends WidgifyIonBaseComponent<WidgifyIonInputSettings> {

	public get formControl() {
		return this.settings.formControl as FormControl
	}

}
