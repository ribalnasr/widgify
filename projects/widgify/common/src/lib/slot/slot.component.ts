import { Component } from '@angular/core';
import { WidgifySlotSettings } from './slot.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'widgify-slot',
	templateUrl: './slot.component.html',
})
export class WidgifySlotComponent extends WidgifyBaseComponent<WidgifySlotSettings> {

	/**
	 * Add your slot's logic here.
	 * 
	 * You can watch the slot settings changes by subscribing to this.settings$.
	 */

	public onSettingsChange = (_current: WidgifySlotSettings, _previous: WidgifySlotSettings) => {
		/**
		 * Here you can add tasks you want te be performed everytime the settings are changed.
		 */
	};

}
