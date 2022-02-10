import { Component } from '@angular/core';
import { WidgifySettings } from './base.interface';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { WidgifyBase, WidgifyChild, WidgifyChildFn } from './base.class';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'widgify-settings-base',
	template: ''
})
export class WidgifySettingsBaseComponent<Settings extends WidgifySettings> {

	public settingsSourceChangeEvent$ = new ReplaySubject();

	private _settingsSource$: BehaviorSubject<Settings>;
	public set settingsSource$(source) {
		this._settingsSource$ = source;
		this.settingsSourceChangeEvent$.next()
	}
	public get settingsSource$() {
		return this._settingsSource$;
	}

	public settings$ = this.settingsSourceChangeEvent$.pipe(
		filter(() => !!this.settingsSource$),
		switchMap(() => this.settingsSource$)
	)

	public get settings() {
		return this._settingsSource$?.value
	}


}

@Component({
	selector: 'widgify-base',
	template: ''
})
export class WidgifyBaseComponent
	<
	Settings extends WidgifySettings = WidgifySettings,
	DataType extends any = any,
	Widget extends WidgifyBase<Settings, DataType> = WidgifyBase<Settings, DataType>
	> extends WidgifySettingsBaseComponent<Settings> {

	public widget: Widget;

	public childrenSourceChangeEvent$ = new ReplaySubject();

	private _childrenSource$: BehaviorSubject<WidgifyChild<Widget, DataType>[]>;
	public set childrenSource$(source) {
		this._childrenSource$ = source;
		this.childrenSourceChangeEvent$.next()
	}
	public get childrenSource$() {
		return this._childrenSource$;
	}

	public children$ = this.childrenSourceChangeEvent$.pipe(
		filter(() => !!this.childrenSource$),
		switchMap(() => this.childrenSource$)
	)

	public get children() {
		return this._childrenSource$?.value
	}

	public widgets: Observable<WidgifyBase[]> = this.children$.pipe(
		map(() => this.parseChildren())
	)


	public parseChildren(data?: DataType) {
		return this.children.map(
			child => {

				let id: string;
				let node: WidgifyChildFn<WidgifyBase, DataType>;

				if (Array.isArray(child)) {
					for (const value of child) {

						if (typeof value === 'string') {
							id = value;
						} else {
							node = value;
						}
					}
				} else {
					node = child
				}

				return typeof node === 'function'
					? node(this.widget, data)
					: node;
			}
		)
	}

}
