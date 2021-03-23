import { WidgifyBase } from '@widgify/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyRepeaterComponent, WidgifyRepeaterList } from './repeater.component';

export class WidgifyRepeater<T> extends WidgifyBase<WidgifyRepeaterSettings<T>> {
	public component = WidgifyRepeaterComponent;
	public defaults: WidgifyRepeaterSettings<T> = { list: new WidgifyRepeaterList<T>() };

}