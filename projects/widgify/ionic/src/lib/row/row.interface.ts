import { Components } from '@ionic/core';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonRowSettings extends Components.IonRow, WidgifySettings {
	cols?: WidgifyBase[];

}