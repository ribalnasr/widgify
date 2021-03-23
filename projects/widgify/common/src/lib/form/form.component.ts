import { Component } from '@angular/core';
import { WidgifyFormSettings } from './form.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
	selector: 'widgify-form',
	templateUrl: './form.component.html',
})
export class WidgifyFormComponent extends WidgifyBaseComponent<WidgifyFormSettings> {

	constructor(
		public formBuilder: FormBuilder
	) {
		super();
	}

	public widget = this.settingsChanges.pipe(
		map(settings => {
			const formGroup = this.settings.formGroup(this.formBuilder);
			return settings.content(formGroup);
		})
	)


}
