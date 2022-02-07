import { Components } from '@ionic/core';
import { WidgifySettings } from '@widgify/core';

export interface WidgifyIonIconSettings extends Partial<Components.IonIcon>, WidgifySettings {

	slot?: string;

}
