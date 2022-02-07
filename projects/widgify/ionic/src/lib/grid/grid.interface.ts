import { Components } from '@ionic/core';
import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyIonGridSettings extends Partial<Components.IonGrid>, WidgifySettings {

	rows?: WidgifyBase[];
}
