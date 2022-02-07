import { Component } from '@angular/core';
import { WidgifyIonInputSettings } from './input.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'widgify-ion-input',
	templateUrl: './input.component.html',
})
export class WidgifyIonInputComponent extends WidgifyBaseComponent<WidgifyIonInputSettings> {

	public get formControl() {
		return this.settings.formControl as FormControl
	}

}
