import { Component, ElementRef } from '@angular/core';
import { WiIonBaseSettings } from './base.interface';
import { WidgifyBase, WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-base',
	template: '',
})
export class WiIonBaseComponent<Settings extends WiIonBaseSettings = WiIonBaseSettings> extends WidgifyBaseComponent<Settings> {

	constructor(
		private _element: ElementRef
	) {
		super();
	}

	public onSettingsChange = (_current: Settings, _previous: Settings) => {
		this.applyAttributes();
	};

	public applyAttributes() {
		for (const key in this.settings) {
			if (Object.prototype.hasOwnProperty.call(this.settings, key)) {
				const element = this.settings[key];
				if (typeof element === 'string' || typeof element === 'boolean' || typeof element === 'number') {
					this._element.nativeElement.setAttribute(key, element as any)
				}

			}
		}
	}


}
