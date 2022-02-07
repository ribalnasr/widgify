import { WidgifyBase } from '@widgify/core';
import { WidgifyIonGridSettings } from './grid.interface';
import { WidgifyIonGridComponent } from './grid.component';

export class WidgifyIonGrid extends WidgifyBase<WidgifyIonGridSettings> {
	public component = WidgifyIonGridComponent;

	/**
	 * The default settings for IonGrid.
	 */
	public defaults: WidgifyIonGridSettings = {};

}

export const widgifyIonGrid = (settings: WidgifyIonGridSettings) => new WidgifyIonGrid(settings);