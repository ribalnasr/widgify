import { Component, ElementRef } from '@angular/core';
import { WiIonBaseSettings } from './base.interface';
import { WiBaseComponent } from '@widgify/core';
import { Subscription } from 'rxjs';
import { WiIonBase } from './base.class';

@Component({
	selector: 'ion-base',
	template: '',
})
export class WiIonBaseComponent<
	Settings extends WiIonBaseSettings = WiIonBaseSettings,
	DataType extends any = any,
	Widget extends WiIonBase<Settings, DataType> = any,
	> extends WiBaseComponent<Settings, DataType, Widget> {

	private attrSubscription: Subscription;

	constructor(
		private _element: ElementRef
	) {
		super();
	}

	ngOnInit() {
		this.attrSubscription = this.settings$.subscribe(this.applyAttributes.bind(this));
	}

	ngOnDestroy() {
		this.attrSubscription.unsubscribe();
	}


	public applyAttributes(settings: Settings) {
		for (const key in settings) {
			if (Object.prototype.hasOwnProperty.call(settings, key)) {
				const element = settings[key];
				if (typeof element === 'string' || typeof element === 'boolean' || typeof element === 'number') {
					this._element.nativeElement.setAttribute(key, element as any)
				}

			}
		}
	}


}
