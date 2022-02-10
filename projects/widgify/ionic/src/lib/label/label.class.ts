import { WiIonLabelSettings } from './label.interface';
import { WiIonLabelComponent } from './label.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '@widgify/core';

export class WiIonLabel extends WiIonBase<WiIonLabelSettings, null, WiIonLabel> {
	public component = WiIonLabelComponent;
	public defaults: WiIonLabelSettings = {};

}

export const wiIonLabel = (settings?: WiIonLabelSettings) => widgifyFn<WiIonLabelSettings, WiIonLabel>(WiIonLabel)(settings);