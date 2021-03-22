import { WidgifyBase } from '@widgify/core';
import { WidgifyDynamicSettings } from './dynamic.interface';
import { WidgifyDynamicComponent } from './dynamic.component';

export class WidgifyDynamic extends WidgifyBase<WidgifyDynamicSettings> {
	public component = WidgifyDynamicComponent;
	public defaults: WidgifyDynamicSettings = {};

}