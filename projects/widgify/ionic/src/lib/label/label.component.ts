import { Component } from '@angular/core';
import { WidgifyIonLabelSettings } from './label.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { WidgifyText } from '../../../../common/src/public-api';
@Component({
	selector: 'widgify-ion-label',
	templateUrl: './label.component.html',
})
export class WidgifyIonLabelComponent extends WidgifyBaseComponent<WidgifyIonLabelSettings> {

	public get widget() {
		if(typeof this.settings.content === 'string') {
			return new WidgifyText({content: this.settings.content});
		}
		return this.settings.content;
	}

}
