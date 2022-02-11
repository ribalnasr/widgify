import { WiIonIconSettings } from './icon.interface';
import { WiIonIconComponent } from './icon.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';

export class WiIonIcon<Props = any> extends WiIonBase<WiIonIconSettings, null, WiIonIcon<Props>, Props> {
	public component = WiIonIconComponent;
	public defaults: WiIonIconSettings = {};
}

export const wiIonIcon =
	wiBaseFn<WiIonIconSettings, null, WiIonIcon<any>, any>(WiIonIcon);