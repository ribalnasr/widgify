import { Component } from '@angular/core';
import { WidgifyMouseEventSettings } from './mouse-event.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'widgify-mouse-event',
	templateUrl: './mouse-event.component.html',
	host: {
		'(click)': "settings.click ? settings.click($event) : noAction()",
	}
})
export class WidgifyMouseEventComponent extends WidgifyBaseComponent<WidgifyMouseEventSettings> {

	public noAction() { }

}
