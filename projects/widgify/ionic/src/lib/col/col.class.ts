import { WiIonColSettings } from './col.interface';
import { WiIonColComponent } from './col.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';


export class WiIonCol<Props = any> extends WiIonBase<WiIonColSettings, null, WiIonCol<Props>, Props> {
	public component = WiIonColComponent;
	public defaults: WiIonColSettings = {};
}

export const wiIonCol =
	wiBaseFn<WiIonColSettings, null, WiIonCol<any>, any>(WiIonCol);