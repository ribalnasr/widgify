import { WidgifyBase } from '@widgify/core';
import { WidgifyIonIconSettings } from './icon.interface';
import { WidgifyIonIconComponent } from './icon.component';

export class WidgifyIonIcon extends WidgifyBase<WidgifyIonIconSettings> {
	public component = WidgifyIonIconComponent;

	/**
	 * The default settings for IonIcon.
	 */
	public defaults: WidgifyIonIconSettings = {};

}

export const widgifyIonIcon = (settings: WidgifyIonIconSettings) => new WidgifyIonIcon(settings);