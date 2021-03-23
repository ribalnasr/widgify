import { WidgifyBase } from '@widgify/core';
import { WidgifyIonLabelSettings } from './label.interface';
import { WidgifyIonLabelComponent } from './label.component';

export class WidgifyIonLabel extends WidgifyBase<WidgifyIonLabelSettings> {
	public component = WidgifyIonLabelComponent;
	public defaults: WidgifyIonLabelSettings = {};

}