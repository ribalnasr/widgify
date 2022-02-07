import { WidgifyBase } from '@widgify/core';
import { WidgifyIonItemSettings } from './item.interface';
import { WidgifyIonItemComponent } from './item.component';

export class WidgifyIonItem extends WidgifyBase<WidgifyIonItemSettings> {
	public component = WidgifyIonItemComponent;
	public defaults: WidgifyIonItemSettings = {};

}

export const widgifyIonItem = (settings: WidgifyIonItemSettings) => new WidgifyIonItem(settings);