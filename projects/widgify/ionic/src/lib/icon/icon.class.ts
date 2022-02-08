import { WidgifyIonIconSettings } from './icon.interface';
import { WidgifyIonIconComponent } from './icon.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonIcon extends WidgifyIonBase<WidgifyIonIconSettings> {
	public component = WidgifyIonIconComponent;

	/**
	 * The default settings for IonIcon.
	 */
	public defaults: WidgifyIonIconSettings = {};

}

export const widgifyIonIcon = (settings?: WidgifyIonIconSettings) => widgifyFn<WidgifyIonIconSettings, WidgifyIonIcon>(WidgifyIonIcon)(settings);