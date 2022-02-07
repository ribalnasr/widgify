import { Component } from '@angular/core';
import { WidgifyIonButtonSettings } from './button.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-button',
	templateUrl: './button.component.html',
})
export class WidgifyIonButtonComponent extends WidgifyBaseComponent<WidgifyIonButtonSettings> {

	public get widgets() {
		if (Array.isArray(this.settings.content)) {
			return this.settings.content;
		}
		return this.settings.content ? [this.settings.content] : [];
	}
}
