import { Input, Component, Host, Inject, forwardRef, ElementRef, ViewContainerRef, ViewRef } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { ReplaySubject } from 'rxjs';
import { DynamicContent } from './base.class';
import { map } from 'rxjs/operators';

@Component({
	selector: 'widgify-settings-base',
	template: ''
})
export class WidgifySettingsBaseComponent<Settings extends WidgifySettings> {

	public settings$ = new ReplaySubject<{ current: Settings; previous: Settings; }>();
	public onSettingsChange = (_current: Settings, _previous: Settings) => { };

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


}

@Component({
	selector: 'widgify-base',
	template: ''
})
export class WidgifyBaseComponent<Settings extends WidgifySettings = WidgifySettings, DataType = any> extends WidgifySettingsBaseComponent<Settings> {

	public content$ = new ReplaySubject<{ current: DynamicContent<DataType>[]; previous: DynamicContent<DataType>[]; }>();
	public onContentChange = (_current: DynamicContent<DataType>[], _previous: DynamicContent<DataType>[]) => { };

	public _content: DynamicContent<DataType>[];
	public get content() {
		return this._content || [];
	};
	public set content(value) {
		this._previousContent = this._content;
		this._content = [...value];
		this.onContentChange(this._content, this._previousContent);
		this.content$.next({
			current: this._content,
			previous: this._previousContent
		});
	};

	private _previousContent: DynamicContent<DataType>[];

	public get previousContent() {
		return this._previousContent;
	};

	public widgets = this.content$.pipe(
		map(() => this.getDynamicContent())
	)

	public getDynamicContent(data?: DataType) {
		return this.content.map(
			content => typeof content === 'function'
				? content(data)
				: content
		)
	}

}
