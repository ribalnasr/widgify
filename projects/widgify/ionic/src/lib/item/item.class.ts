import { WiIonItemSettings } from './item.interface';
import { WiIonItemComponent } from './item.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';


export class WiIonItem<Props = any> extends WiIonBase<WiIonItemSettings, null, WiIonItem<Props>, Props> {
	public component = WiIonItemComponent;
	public defaults: WiIonItemSettings = {};
}

export const wiIonItem =
	wiBaseFn<WiIonItemSettings, null, WiIonItem<any>, any>(WiIonItem);