import { WidgifyBase, WidgifySettings } from '@widgify/core';

export interface WidgifyDynamicSettings<Widget extends WidgifyBase = WidgifyBase> extends WidgifySettings {
	data?: any;
	widget?: Widget | ((data: any) => Widget);
}
