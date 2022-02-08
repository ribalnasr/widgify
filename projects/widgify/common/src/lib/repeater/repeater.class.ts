import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyRepeaterComponent } from './repeater.component';
import { WidgifyRepeaterList } from './repeater-list.class';

export class WidgifyRepeater<T = any> extends WidgifyBase<WidgifyRepeaterSettings<T>> {
	public component = WidgifyRepeaterComponent;
	public defaults: WidgifyRepeaterSettings<T> = { list: new WidgifyRepeaterList<T>() };

}

export const widgifyRepeater = <T = any>(settings?: WidgifyRepeaterSettings<T>) => widgifyFn<WidgifyRepeaterSettings<T>, WidgifyRepeater<T>>(WidgifyRepeater)(settings);