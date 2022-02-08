import { WiIonRowSettings } from './row.interface';
import { WiIonRowComponent } from './row.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WiIonRow extends WiIonBase<WiIonRowSettings> {
	public component = WiIonRowComponent;

	/**
	 * The default settings for IonRow.
	 */
	public defaults: WiIonRowSettings = {};

}

export const wiIonRow = (settings?: WiIonRowSettings) => widgifyFn<WiIonRowSettings, WiIonRow>(WiIonRow)(settings);