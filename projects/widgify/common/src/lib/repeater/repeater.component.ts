import { Component } from '@angular/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
@Component({
	selector: 'widgify-repeater',
	templateUrl: './repeater.component.html',
})
export class WidgifyRepeaterComponent<T> extends WidgifyBaseComponent<WidgifyRepeaterSettings<T>> {

	public widgets = this.settingsChanges.pipe(
		map(
			settings => {
				let list: WidgifyRepeaterList<T>;
				if (Array.isArray(settings.list)) {
					list = new WidgifyRepeaterList(settings.list) as WidgifyRepeaterList<T>
				} else {
					list = settings.list
				}
				return { ...settings, list };
			}
		),
		switchMap(settings => settings.list.valueChanges.pipe(
			map(
				value => value.map((data, index) => typeof settings.widget === 'function'
					? settings.widget(new WidgifyRepeaterRow<T>(data, index, settings.list), settings.list)
					: settings.widget
				)
			)
		)),
	
	)

}

export class WidgifyRepeaterList<T> {

	public valueChanges = new ReplaySubject<T[]>();

	constructor(
		public data: T[] = []
	) {
		this.valueChanges.next(data);
	}

	public set(data: T[]) {
		this.data = data;
		this.valueChanges.next(this.data);
	}

	public add(data: T | T[], atTheBeginning?: boolean) {
		let newData: T[];
		if (Array.isArray(data)) {
			newData = data;
		} else {
			newData = [data];
		}
		if (atTheBeginning) {

			this.data = [...newData, ...(this.data || [])];
		} else {
			this.data = [...(this.data || []), ...newData];
		}
		this.valueChanges.next(this.data);
	}

	public remove(index: number) {
		console.log(this)
		const value = [...this.data];
		value.splice(index, 1);
		this.data = value;
		this.valueChanges.next(this.data);
	}

	public update(index: number, data: T) {
		this.data[index] = data;
		this.valueChanges.next(this.data);
	}

}

export class WidgifyRepeaterRow<T> {

	constructor(
		public data: T,
		public index: number,
		public list: WidgifyRepeaterList<T>
	) { }

	public remove() {
		this.list.remove(this.index);
	}

	public update(data: T) {
		this.list.update(this.index, data);
	}

}
