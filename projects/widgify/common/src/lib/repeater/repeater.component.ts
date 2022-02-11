import { Component } from '@angular/core';
import { WiRepeaterSettings } from './repeater.interface';
import { WiBaseComponent } from '@widgify/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { WiRepeaterList } from './repeater-list.class';
import { WiRepeaterRow } from './repeater-row.class';
import { WiRepeater } from './repeater.class';
@Component({
	selector: 'wi-repeater',
	templateUrl: './repeater.component.html',
})
export class WiRepeaterComponent<Props, T> extends WiBaseComponent<WiRepeaterSettings<T>, T, WiRepeater<Props, T>> {

	public widgets = this.settings$.pipe(
		map(
			settings => {
				let list: WiRepeaterList<T>;
				if (Array.isArray(settings.list)) {
					list = new WiRepeaterList(settings.list) as WiRepeaterList<T>
				} else {
					list = settings.list
				}
				return { ...settings, list };
			}
		),
		switchMap(settings => settings.list.valueChanges.pipe(
			map(
				value => value.map((data, index) => typeof settings.widget === 'function'
					? settings.widget(new WiRepeaterRow<T>(data, index, settings.list), settings.list)
					: settings.widget
				)
			)
		)),

	)

}

