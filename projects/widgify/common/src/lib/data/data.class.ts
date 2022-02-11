
import { WiBase } from '@widgify/core';
import { WiDataSettings } from './data.interface';
import { WiDataComponent } from './data.component';
import { Type } from '@angular/core';


export class WiData<Props = any, DataType = any> extends WiBase<WiDataSettings<DataType>, DataType, WiData<Props, DataType>, Props> {

	public component: Type<WiDataComponent<Props, DataType>> = WiDataComponent;
	public defaults: WiDataSettings<DataType> = {};

}


export const wiData =
	<Props, DataType = any>(settings?: WiDataSettings<DataType>, props?: Props) =>
		new WiData(settings, props) as WiData<Props, DataType>;
