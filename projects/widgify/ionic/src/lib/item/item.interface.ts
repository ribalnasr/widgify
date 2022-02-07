import { Components } from '@ionic/core';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonItemSettings extends Partial<Components.IonItem>, WidgifySettings {
	content?: WidgifyBase | WidgifyBase[];
}
