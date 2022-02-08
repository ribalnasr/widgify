import { WidgifyIonButtonSettings } from './button.interface';
import { WidgifyIonButtonComponent } from './button.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonButton extends WidgifyIonBase<WidgifyIonButtonSettings> {
	public component = WidgifyIonButtonComponent;

	/**
	 * The default settings for IonButton.
	 */
	public defaults: WidgifyIonButtonSettings = {

	};

}

export const widgifyIonButton = (settings?: WidgifyIonButtonSettings) => widgifyFn<WidgifyIonButtonSettings, WidgifyIonButton>(WidgifyIonButton)(settings);