import { WiBase, widgifyFn } from '@widgify/core';
import { WiRepeaterSettings } from './repeater.interface';
import { WiRepeaterComponent } from './repeater.component';
import { WiRepeaterList } from './repeater-list.class';

export class WiRepeater<T = any> extends WiBase<WiRepeaterSettings<T>> {
	public component = WiRepeaterComponent;
	public defaults: WiRepeaterSettings<T> = { list: new WiRepeaterList<T>() };

}

export const wiRepeater = <T = any>(settings?: WiRepeaterSettings<T>) => widgifyFn<WiRepeaterSettings<T>, WiRepeater<T>>(WiRepeater)(settings);