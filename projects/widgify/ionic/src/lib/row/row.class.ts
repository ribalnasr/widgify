import { WidgifyBase } from '@widgify/core';
import { WidgifyIonRowSettings } from './row.interface';
import { WidgifyIonRowComponent } from './row.component';

export class WidgifyIonRow extends WidgifyBase<WidgifyIonRowSettings> {
	public component = WidgifyIonRowComponent;

	/**
	 * The default settings for IonRow.
	 */
	public defaults: WidgifyIonRowSettings = {};

}

export const widgifyIonRow = (settings: WidgifyIonRowSettings) => new WidgifyIonRow(settings);