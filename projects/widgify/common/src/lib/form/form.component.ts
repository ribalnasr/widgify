import { Component, ElementRef } from '@angular/core';
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
		public formBuilder: FormBuilder,
		element: ElementRef
	) {
		super(element);
	}

	public widget = this.settings$.pipe(
		map(settings => {
			const formGroup = this.settings.formGroup(this.formBuilder);
			return settings.current.content(formGroup);
		})
	)


}
