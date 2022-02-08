import { WidgifyIonRowSettings } from './row.interface';
import { WidgifyIonRowComponent } from './row.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonRow extends WidgifyIonBase<WidgifyIonRowSettings> {
	public component = WidgifyIonRowComponent;

	/**
	 * The default settings for IonRow.
	 */
	public defaults: WidgifyIonRowSettings = {};

}

export const widgifyIonRow = (settings?: WidgifyIonRowSettings) => widgifyFn<WidgifyIonRowSettings, WidgifyIonRow>(WidgifyIonRow)(settings);