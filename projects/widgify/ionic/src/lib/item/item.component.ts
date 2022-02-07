import { Component } from '@angular/core';
import { WidgifyIonItemSettings } from './item.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'ion-item',
	templateUrl: './item.component.html',
	host: {
		'[button]': 'settings.button',
		'[color]': 'settings.color',
		'[detail]': 'settings.detail',
		'[detailIcon]': 'settings.detailIcon',
		'[disabled]': 'settings.disabled',
		'[download]': 'settings.download',
		'[href]': 'settings.href',
		'[lines]': 'settings.lines',
		'[mode]': 'settings.mode',
		'[rel]': 'settings.rel',
		'[routerAnimation]': 'settings.routerAnimation',
		'[routerDirection]': 'settings.routerDirection',
		'[target]': 'settings.target',
		'[type]': 'settings.type',
	}
})
export class WidgifyIonItemComponent extends WidgifyBaseComponent<WidgifyIonItemSettings> {

	public get widgets() {
		if (Array.isArray(this.settings.content)) {
			return this.settings.content;
		}
		return this.settings.content ? [this.settings.content] : [];
	}

}
