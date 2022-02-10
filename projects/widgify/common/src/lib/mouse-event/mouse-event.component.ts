import { Component } from '@angular/core';
import { WidgifyMouseEventSettings } from './mouse-event.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { WidgifyMouseEvent } from './mouse-event.class';
@Component({
	selector: 'widgify-mouse-event',
	templateUrl: './mouse-event.component.html',
	host: {
		'(click)': "settings.click ? settings.click($event) : noAction()",
	}
})
export class WidgifyMouseEventComponent extends WidgifyBaseComponent<WidgifyMouseEventSettings, null, WidgifyMouseEvent> {

	public noAction() { }

}
