import { Component } from '@angular/core';
import { WiMouseEventSettings } from './mouse-event.interface';
import { WiBaseComponent } from '@widgify/core';
import { WiMouseEvent } from './mouse-event.class';
@Component({
	selector: 'wi-mouse-event',
	templateUrl: './mouse-event.component.html',
	host: {
		'(click)': "settings.click ? settings.click($event) : noAction()",
	}
})
export class WiMouseEventComponent extends WiBaseComponent<WiMouseEventSettings, null, WiMouseEvent> {

	public noAction() { }

}
