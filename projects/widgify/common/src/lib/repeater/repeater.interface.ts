import { WiBase, WiSettings } from '@widgify/core';
import { WiRepeaterList } from './repeater-list.class';
import { WiRepeaterRow } from './repeater-row.class';

export interface WiRepeaterSettings<T = any> extends WiSettings {
	list?: WiRepeaterList<T> | T[];
	widget?: (WiBase | ((row?: WiRepeaterRow<T>, list?: WiRepeaterList<T>) => WiBase))
}
