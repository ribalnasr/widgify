import { WiBase } from '@widgify/core';
import { WiRepeaterSettings } from './repeater.interface';
import { WiRepeaterComponent } from './repeater.component';
import { WiRepeaterList } from './repeater-list.class';
import { Type } from '@angular/core';

export class WiRepeater<Props = any, DataType = any> extends WiBase<WiRepeaterSettings<DataType>, DataType, WiRepeater<Props, DataType>, Props> {
	public component: Type<WiRepeaterComponent<Props, DataType>> = WiRepeaterComponent;
	public defaults: WiRepeaterSettings<DataType> = { list: new WiRepeaterList<DataType>() };

}

export const wiRepeater =
	<Props, DataType = any>(settings?: WiRepeaterSettings<DataType>, props?: Props) =>
		new WiRepeater(settings, props) as WiRepeater<Props, DataType>;
