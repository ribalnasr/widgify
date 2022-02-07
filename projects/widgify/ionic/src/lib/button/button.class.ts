import { WidgifyBase } from '@widgify/core';
import { WidgifyIonButtonSettings } from './button.interface';
import { WidgifyIonButtonComponent } from './button.component';

export class WidgifyIonButton extends WidgifyBase<WidgifyIonButtonSettings> {
	public component = WidgifyIonButtonComponent;

	/**
	 * The default settings for IonButton.
	 */
	public defaults: WidgifyIonButtonSettings = {

	};

}

export const widgifyIonButton = (settings: WidgifyIonButtonSettings) => new WidgifyIonButton(settings);