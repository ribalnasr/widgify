import { WiIonColSettings } from './col.interface';
import { WiIonColComponent } from './col.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WiIonCol extends WiIonBase<WiIonColSettings> {
	public component = WiIonColComponent;

	/**
	 * The default settings for IonCol.
	 */
	public defaults: WiIonColSettings = {};

}

export const wiIonCol = (settings?: WiIonColSettings) => widgifyFn<WiIonColSettings, WiIonCol>(WiIonCol)(settings);