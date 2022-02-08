import { WiIonLabelSettings } from './label.interface';
import { WiIonLabelComponent } from './label.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WiIonLabel extends WiIonBase<WiIonLabelSettings> {
	public component = WiIonLabelComponent;
	public defaults: WiIonLabelSettings = {};

}

export const wiIonLabel = (settings?: WiIonLabelSettings) => widgifyFn<WiIonLabelSettings, WiIonLabel>(WiIonLabel)(settings);