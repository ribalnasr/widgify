import { WiBase } from '@widgify/core';
import { WiMouseEventSettings } from './mouse-event.interface';
import { WiMouseEventComponent } from './mouse-event.component';

export class WiMouseEvent<Props = any> extends WiBase<WiMouseEventSettings, null, WiMouseEvent, Props> {
	public component = WiMouseEventComponent;
	public defaults: WiMouseEventSettings = {};

}

export const wiMouseEvent =
	<Props>(settings?: WiMouseEventSettings, props?: Props) =>
		new WiMouseEvent(settings, props) as WiMouseEvent<Props>;
