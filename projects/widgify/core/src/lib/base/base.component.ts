import { Component } from '@angular/core';
import { WiSettings } from './base.interface';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { WiBase, WiChild, WiChildFn } from './base.class';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'wi-settings-base',
	template: ''
})
export class WiSettingsBaseComponent<Settings extends WiSettings> {

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
	selector: 'wi-base',
	template: ''
})
export class WiBaseComponent
	<
	Settings extends WiSettings = WiSettings,
	DataType extends any = any,
	Widget extends WiBase<Settings, DataType> = WiBase<Settings, DataType>
	> extends WiSettingsBaseComponent<Settings> {

	public widget: Widget;

	public childrenSourceChangeEvent$ = new ReplaySubject();

	private _childrenSource$: BehaviorSubject<WiChild<Widget, DataType>[]>;
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

	public widgets: Observable<WiBase[]> = this.children$.pipe(
		map(() => this.parseChildren())
	)


	public parseChildren(data?: DataType) {
		return this.children.map(
			child => {

				let id: string;
				let node: WiChildFn<WiBase, DataType>;

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
