import { Input, Component, ElementRef, ViewRef, ViewContainerRef, ComponentRef } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { ReplaySubject } from 'rxjs';
import { WidgifyBase } from './base.class';

@Component({
	selector: 'widgify-base',
	template: ''
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
			current: this._settings,
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

	public _content: WidgifyBase[];
	public get content() {
		return this._content || [];
	};
	public set content(value) {
		this._content = value;
	};



}

