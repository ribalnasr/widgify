import { WidgifyBase } from '@widgify/core';
import { WidgifyMouseEventSettings } from './mouse-event.interface';
import { WidgifyMouseEventComponent } from './mouse-event.component';

export class WidgifyMouseEvent extends WidgifyBase<WidgifyMouseEventSettings> {
	public component = WidgifyMouseEventComponent;
	public defaults: WidgifyMouseEventSettings = {};

}