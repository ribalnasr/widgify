import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyMouseEventSettings } from './mouse-event.interface';
import { WidgifyMouseEventComponent } from './mouse-event.component';

export class WidgifyMouseEvent extends WidgifyBase<WidgifyMouseEventSettings, null, WidgifyMouseEvent> {
	public component = WidgifyMouseEventComponent;
	public defaults: WidgifyMouseEventSettings = {};

}

export const widgifyMouseEvent = widgifyFn<WidgifyMouseEventSettings, WidgifyMouseEvent>(WidgifyMouseEvent);