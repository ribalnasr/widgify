import { WidgifyIonGridSettings } from './grid.interface';
import { WidgifyIonGridComponent } from './grid.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonGrid extends WidgifyIonBase<WidgifyIonGridSettings> {
	public component = WidgifyIonGridComponent;

	/**
	 * The default settings for IonGrid.
	 */
	public defaults: WidgifyIonGridSettings = {};

}

export const widgifyIonGrid = (settings?: WidgifyIonGridSettings) => widgifyFn<WidgifyIonGridSettings, WidgifyIonGrid>(WidgifyIonGrid)(settings);