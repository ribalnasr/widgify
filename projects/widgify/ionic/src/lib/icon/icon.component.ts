import { Component } from '@angular/core';
import { WidgifyIonIconSettings } from './icon.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-icon',
	templateUrl: './icon.component.html',
	host: {
		'[ariaHidden]': 'settings.ariaHidden',
		'[ariaLabel]': 'settings.ariaLabel',
		'[color]': 'settings.color',
		'[flipRtl]': 'settings.flipRtl',
		'[icon]': 'settings.icon',
		'[ios]': 'settings.ios',
		'[lazy]': 'settings.lazy',
		'[md]': 'settings.md',
		'[mode]': 'settings.mode',
		'[name]': 'settings.name',
		'[sanitize]': 'settings.sanitize',
		'[size]': 'settings.size',
		'[src]': 'settings.src',
	}
})
export class WidgifyIonIconComponent extends WidgifyBaseComponent<WidgifyIonIconSettings> {


}
