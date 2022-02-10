import { Component } from '@angular/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { WidgifyRepeaterList } from './repeater-list.class';
import { WidgifyRepeaterRow } from './repeater-row.class';
@Component({
	selector: 'widgify-repeater',
	templateUrl: './repeater.component.html',
})
export class WidgifyRepeaterComponent<T> extends WidgifyBaseComponent<WidgifyRepeaterSettings<T>> {

	public widgets = this.settings$.pipe(
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

