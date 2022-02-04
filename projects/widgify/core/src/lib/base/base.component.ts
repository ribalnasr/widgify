import { Input, Component } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { ReplaySubject } from 'rxjs';

@Component({
	selector: 'widgify-base',
	template: '{{ settings | json }}'
})
export class WidgifyBaseComponent<Settings extends WidgifySettings> {

	public settings$ = new ReplaySubject<{ current: Settings; previous: Settings; }>();
	public onSettingsChange = (_current: Settings, _previous: Settings) => { };

	/**
	 * @deprecated Use settings$ instead.
	 */
	public settingsChanges = this.settings$;

	private _settings: Settings;
	@Input()
	public set settings(value) {
		this._previousSettings = this._settings;
		this._settings = { ...value };
		this.onSettingsChange(this._settings, this._previousSettings);
		this.settings$.next({
			current: this.settings,
			previous: this._previousSettings
		});
	};
	public get settings() {
		return this._settings;
	};

	private _previousSettings: Settings;

	public get previousSettings() {
		return this._previousSettings;
	};

}

