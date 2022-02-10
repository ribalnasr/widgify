import { WiIonButtonSettings } from './button.interface';
import { WiIonButtonComponent } from './button.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '@widgify/core';

export class WiIonButton extends WiIonBase<WiIonButtonSettings, null, WiIonButton> {
	public component = WiIonButtonComponent;

	/**
	 * The default settings for IonButton.
	 */
	public defaults: WiIonButtonSettings = {

	};

}

export const wiIonButton = (settings?: WiIonButtonSettings) => widgifyFn<WiIonButtonSettings, WiIonButton>(WiIonButton)(settings);