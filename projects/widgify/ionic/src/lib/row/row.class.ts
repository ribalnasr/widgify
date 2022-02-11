import { WiIonRowSettings } from './row.interface';
import { WiIonRowComponent } from './row.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';


export class WiIonRow<Props = any> extends WiIonBase<WiIonRowSettings, null, WiIonRow<Props>, Props> {
	public component = WiIonRowComponent;
	public defaults: WiIonRowSettings = {};
}

export const wiIonRow =
	wiBaseFn<WiIonRowSettings, null, WiIonRow<any>, any>(WiIonRow);