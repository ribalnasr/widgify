import { Component } from '@angular/core';
import { WidgetSettings } from './widget.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'widget',
	templateUrl: './widget.component.html',
})
export class WidgetComponent extends WidgifyBaseComponent<WidgetSettings> {

	/**
	 * Add your widget's logic here.
	 * 
	 * You can watch the widget settings changes by subscribing to this.settings$.
	 */

	public override onSettingsChange = (_current: WidgetSettings, _previous: WidgetSettings) => {
		/**
		 * Here you can add tasks you want te be performed everytime the settings are changed.
		 */
	};

}
