import { WidgifyIonItemSettings } from './item.interface';
import { WidgifyIonItemComponent } from './item.component';
import { WidgifyIonBase } from '../base/base.class';
import { widgifyFn } from '../../../../core/src/public-api';

export class WidgifyIonItem extends WidgifyIonBase<WidgifyIonItemSettings> {
	public component = WidgifyIonItemComponent;
	public defaults: WidgifyIonItemSettings = {};

}

export const widgifyIonItem = (settings?: WidgifyIonItemSettings) => widgifyFn<WidgifyIonItemSettings, WidgifyIonItem>(WidgifyIonItem)(settings);