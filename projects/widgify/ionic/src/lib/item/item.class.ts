import { WiIonItemSettings } from './item.interface';
import { WiIonItemComponent } from './item.component';
import { WiIonBase } from '../base/base.class';
import { widgifyFn } from '@widgify/core';

export class WiIonItem extends WiIonBase<WiIonItemSettings, null, WiIonItem> {
	public component = WiIonItemComponent;
	public defaults: WiIonItemSettings = {};

}

export const wiIonItem = (settings?: WiIonItemSettings) => widgifyFn<WiIonItemSettings, WiIonItem>(WiIonItem)(settings);