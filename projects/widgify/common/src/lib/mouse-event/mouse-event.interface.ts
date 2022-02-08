import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyMouseEventSettings extends WidgifySettings {
	click?: (event?: MouseEvent) => any;

}
