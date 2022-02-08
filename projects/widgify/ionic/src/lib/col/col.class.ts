import { WidgifyIonColSettings } from './col.interface';
import { WidgifyIonColComponent } from './col.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonCol extends WidgifyIonBase<WidgifyIonColSettings> {
	public component = WidgifyIonColComponent;

	/**
	 * The default settings for IonCol.
	 */
	public defaults: WidgifyIonColSettings = {};

}

export const widgifyIonCol = (settings?: WidgifyIonColSettings) => widgifyFn<WidgifyIonColSettings, WidgifyIonCol>(WidgifyIonCol)(settings);