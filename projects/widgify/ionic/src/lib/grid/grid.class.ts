import { WiIonGridSettings } from './grid.interface';
import { WiIonGridComponent } from './grid.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';

export class WiIonGrid<Props = any> extends WiIonBase<WiIonGridSettings, null, WiIonGrid<Props>, Props> {
	public component = WiIonGridComponent;
	public defaults: WiIonGridSettings = {};
}

export const wiIonGrid =
	wiBaseFn<WiIonGridSettings, null, WiIonGrid<any>, any>(WiIonGrid);