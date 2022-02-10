import { WiIonGridSettings } from './grid.interface';
import { WiIonGridComponent } from './grid.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '@widgify/core';

export class WiIonGrid extends WiIonBase<WiIonGridSettings, null, WiIonGrid> {
	public component = WiIonGridComponent;

	/**
	 * The default settings for IonGrid.
	 */
	public defaults: WiIonGridSettings = {};

}

export const wiIonGrid = (settings?: WiIonGridSettings) => widgifyFn<WiIonGridSettings, WiIonGrid>(WiIonGrid)(settings);