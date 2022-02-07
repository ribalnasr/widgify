import { Components } from '@ionic/core';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonButtonSettings extends Partial<Components.IonButton>, WidgifySettings {
	content?: WidgifyBase | WidgifyBase[];
}
