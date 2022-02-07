import { WidgifyBase, WidgifySettings } from '@widgify/core';
import { WidgifyRepeaterList } from './repeater-list.class';
import { WidgifyRepeaterRow } from './repeater-row.class';

export interface WidgifyRepeaterSettings<T> extends WidgifySettings {
	list?: WidgifyRepeaterList<T> | T[];
	widget?: (WidgifyBase | ((row?: WidgifyRepeaterRow<T>, list?: WidgifyRepeaterList<T>) => WidgifyBase))
}
