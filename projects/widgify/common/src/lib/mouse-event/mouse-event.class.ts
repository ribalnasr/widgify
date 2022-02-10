import { WiBase, widgifyFn } from '@widgify/core';
import { WiMouseEventSettings } from './mouse-event.interface';
import { WiMouseEventComponent } from './mouse-event.component';

export class WiMouseEvent extends WiBase<WiMouseEventSettings, null, WiMouseEvent> {
	public component = WiMouseEventComponent;
	public defaults: WiMouseEventSettings = {};

}

export const wiMouseEvent = widgifyFn<WiMouseEventSettings, WiMouseEvent>(WiMouseEvent);