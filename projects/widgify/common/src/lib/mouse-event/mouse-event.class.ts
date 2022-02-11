import { WiBase, wiBaseFn } from '@widgify/core';
import { WiMouseEventSettings } from './mouse-event.interface';
import { WiMouseEventComponent } from './mouse-event.component';

export class WiMouseEvent<Props = any> extends WiBase<WiMouseEventSettings, null, WiMouseEvent, Props> {
	public component = WiMouseEventComponent;
	public defaults: WiMouseEventSettings = {};

}

export const wiMouseEvent =
	wiBaseFn<WiMouseEventSettings, null, WiMouseEvent<any>, any>(WiMouseEvent);