import { Components } from '@ionic/core';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonColSettings extends Components.IonCol, WidgifySettings {
	content?: WidgifyBase;
}
