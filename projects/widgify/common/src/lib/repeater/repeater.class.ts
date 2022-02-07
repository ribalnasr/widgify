import { WidgifyBase } from '@widgify/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyRepeaterComponent } from './repeater.component';
import { WidgifyRepeaterList } from './repeater-list.class';

export class WidgifyRepeater<T> extends WidgifyBase<WidgifyRepeaterSettings<T>> {
	public component = WidgifyRepeaterComponent;
	public defaults: WidgifyRepeaterSettings<T> = { list: new WidgifyRepeaterList<T>() };

}

export const widgifyRepeater = <T>(settings: WidgifyRepeaterSettings<T>) => new WidgifyRepeater<T>(settings);