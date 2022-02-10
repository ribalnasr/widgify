import { Component } from '@angular/core';
import { WiTemplateSettings } from './template.interface';
import { WiBaseComponent } from '@widgify/core';
import { WiTemplate } from './template.class';

@Component({
	selector: 'wi-template',
	templateUrl: './template.component.html',
})
export class WiTemplateComponent extends WiBaseComponent<WiTemplateSettings, null, WiTemplate> {

	/**
	 * Add your slot's logic here.
	 * 
	 * You can watch the slot settings changes by subscribing to this.settings$.
	 */

	public onSettingsChange = (_current: WiTemplateSettings, _previous: WiTemplateSettings) => {
		/**
		 * Here you can add tasks you want te be performed everytime the settings are changed.
		 */
	};

}
