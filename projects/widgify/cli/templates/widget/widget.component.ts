import { Component } from '@angular/core';
import { WidgifyWidgetSettings } from './widget.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'widgify-widget',
	templateUrl: './widget.component.html',
})
export class WidgifyWidgetComponent extends WidgifyBaseComponent<WidgifyWidgetSettings> {

	/**
	 * Add your widget's logic here.
	 * 
	 * You can watch the widget settings changes by subscribing to this.settingsChanges.
	 */

}
