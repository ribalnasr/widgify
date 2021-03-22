import { Input, Component } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { ReplaySubject } from 'rxjs';

@Component({
	selector: 'widgify-base',
	template: '{{ settings | json }}'
})
export class WidgifyBaseComponent<Settings extends WidgifySettings> {

	public settingsChanges = new ReplaySubject<Settings>();

	private _settings: Settings;
	@Input('settings')
	public get settings() {
		return this._settings;
	};
	public set settings(value) {
		this._settings = value;
		this.settingsChanges.next(value);
	};

}

