import { Component } from '@angular/core';
import { PrefixWidgetSettings } from './widget.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'prefix-widget',
	templateUrl: './widget.component.html',
})
export class PrefixWidgetComponent extends WidgifyBaseComponent<PrefixWidgetSettings> {

	/**
	 * Add your widget's logic here.
	 * 
	 * You can watch the widget settings changes by subscribing to this.settings$.
	 */

	constructor(
		/**
		 * Inject Angular services here to use them inside this component.
		 */
	) {
		super()
	}

	public override onSettingsChange = (_current: PrefixWidgetSettings, _previous: PrefixWidgetSettings) => {
		/**
		 * Here you can add tasks you want te be performed everytime the settings are changed.
		 */
	};



}
