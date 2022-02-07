import { Input, Component, ElementRef, ViewRef, ViewContainerRef, ComponentRef } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { ReplaySubject } from 'rxjs';

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
		this.applyAttributes();
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


	constructor(
		private _element: ElementRef<HTMLElement>
	) { }

	applyAttributes() {
		for (const key in this.settings) {
			if (Object.prototype.hasOwnProperty.call(this.settings, key)) {
				const element = this.settings[key];
				// if (typeof element === 'string') {
				this._element.nativeElement.setAttribute(key, element as any)
				// }

			}
		}
	}

}

