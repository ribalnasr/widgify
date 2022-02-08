import { Component } from '@angular/core';
import { WidgifyFormSettings } from './form.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
	selector: 'widgify-form',
	templateUrl: './form.component.html',
})
export class WidgifyFormComponent extends WidgifyBaseComponent<WidgifyFormSettings, FormGroup> {

	constructor(
		public formBuilder: FormBuilder,
	) {
		super();
	}

	public widgets = this.settings$.pipe(
		map(
			() => {
				const formGroup = this.settings.formGroup(this.formBuilder);
				return this.getDynamicContent(formGroup);
			}
		)
	);




}
