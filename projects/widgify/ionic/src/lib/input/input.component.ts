import { Component } from '@angular/core';
import { WiIonInputSettings } from './input.interface';
import { FormControl } from '@angular/forms';
import { WiIonBaseComponent } from '../base/base.component';
@Component({
	selector: 'widgify-ion-input',
	templateUrl: './input.component.html',
})
export class WiIonInputComponent extends WiIonBaseComponent<WiIonInputSettings> {

	public get formControl() {
		return this.settings.formControl as FormControl
	}

}
