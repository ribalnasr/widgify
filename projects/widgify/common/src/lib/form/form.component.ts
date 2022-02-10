import { Component } from '@angular/core';
import { WiFormSettings } from './form.interface';
import { WiBaseComponent } from '@widgify/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { WiForm } from './form.class';
@Component({
	selector: 'wi-form',
	templateUrl: './form.component.html',
})
export class WiFormComponent extends WiBaseComponent<WiFormSettings, FormGroup, WiForm> {

	constructor(
		public formBuilder: FormBuilder,
	) {
		super();
	}

	public widgets = this.settings$.pipe(
		map(
			(settings) => {
				const formGroup = settings.formGroup(this.formBuilder);
				return this.parseChildren(formGroup);
			}
		)
	);




}
