import { WidgifyBase } from '@widgify/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyRepeaterComponent } from './repeater.component';

export class WidgifyRepeater extends WidgifyBase<WidgifyRepeaterSettings> {
	public component = WidgifyRepeaterComponent;
	public defaults: WidgifyRepeaterSettings = { data: [], widget: null};

}