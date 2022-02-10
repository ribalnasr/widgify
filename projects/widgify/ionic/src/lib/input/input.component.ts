import { Component } from '@angular/core';
import { WiIonInputSettings } from './input.interface';
import { FormControl } from '@angular/forms';
import { WiIonBaseComponent } from '../base/base.component';
import { WiIonInput } from './input.class';
@Component({
	selector: 'wi-ion-input',
	templateUrl: './input.component.html',
})
export class WiIonInputComponent extends WiIonBaseComponent<WiIonInputSettings, null, WiIonInput> {

	public get formControl() {
		return this.settings.formControl as FormControl
	}

}
