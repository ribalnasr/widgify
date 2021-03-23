import { WidgifyBase, WidgifySettings } from '@widgify/core';
import { WidgifyRepeaterList, WidgifyRepeaterRow } from './repeater.component';

export interface WidgifyRepeaterSettings<T> extends WidgifySettings {
	list?: WidgifyRepeaterList<T> | T[];
	widget?: (WidgifyBase | ((row?: WidgifyRepeaterRow<T>, list?: WidgifyRepeaterList<T>) => WidgifyBase))
}
