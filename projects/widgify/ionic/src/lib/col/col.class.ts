import { WidgifyBase } from '@widgify/core';
import { WidgifyIonColSettings } from './col.interface';
import { WidgifyIonColComponent } from './col.component';

export class WidgifyIonCol extends WidgifyBase<WidgifyIonColSettings> {
	public component = WidgifyIonColComponent;

	/**
	 * The default settings for IonCol.
	 */
	public defaults: WidgifyIonColSettings = {};

}

export const widgifyIonCol = (settings: WidgifyIonColSettings) => new WidgifyIonCol(settings);