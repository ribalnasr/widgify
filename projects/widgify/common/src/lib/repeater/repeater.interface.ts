import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyRepeaterSettings extends WidgifySettings {
	data: any[];
	widget: WidgifyBase | ((row) => WidgifyBase));
}
