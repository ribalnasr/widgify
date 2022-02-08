import { WidgifyIonLabelSettings } from './label.interface';
import { WidgifyIonLabelComponent } from './label.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonLabel extends WidgifyIonBase<WidgifyIonLabelSettings> {
	public component = WidgifyIonLabelComponent;
	public defaults: WidgifyIonLabelSettings = {};

}

export const widgifyIonLabel = (settings?: WidgifyIonLabelSettings) => widgifyFn<WidgifyIonLabelSettings, WidgifyIonLabel>(WidgifyIonLabel)(settings);