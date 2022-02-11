import { WiIonLabelSettings } from './label.interface';
import { WiIonLabelComponent } from './label.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';


export class WiIonLabel<Props = any> extends WiIonBase<WiIonLabelSettings, null, WiIonLabel<Props>, Props> {
	public component = WiIonLabelComponent;
	public defaults: WiIonLabelSettings = {};
}

export const wiIonLabel =
	wiBaseFn<WiIonLabelSettings, null, WiIonLabel<any>, any>(WiIonLabel);