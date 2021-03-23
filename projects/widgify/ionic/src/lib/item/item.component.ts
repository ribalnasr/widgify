import { Component } from '@angular/core';
import { WidgifyIonItemSettings } from './item.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'widgify-ion-item',
	templateUrl: './item.component.html',
})
export class WidgifyIonItemComponent extends WidgifyBaseComponent<WidgifyIonItemSettings> {

	public get widgets() {
		if(Array.isArray(this.settings.content)) {
			return this.settings.content;
		}
		return this.settings.content ? [this.settings.content] : [];
	}

}
