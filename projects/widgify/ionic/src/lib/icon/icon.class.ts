import { WiIonIconSettings } from './icon.interface';
import { WiIonIconComponent } from './icon.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WiIonIcon extends WiIonBase<WiIonIconSettings> {
	public component = WiIonIconComponent;

	/**
	 * The default settings for IonIcon.
	 */
	public defaults: WiIonIconSettings = {};

}

export const wiIonIcon = (settings?: WiIonIconSettings) => widgifyFn<WiIonIconSettings, WiIonIcon>(WiIonIcon)(settings);