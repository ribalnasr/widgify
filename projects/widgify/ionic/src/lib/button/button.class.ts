import { WiIonButtonSettings } from './button.interface';
import { WiIonButtonComponent } from './button.component';
import { WiIonBase } from '../base/base.class';
import { wiBaseFn } from '@widgify/core';

export class WiIonButton<Props = any> extends WiIonBase<WiIonButtonSettings, null, WiIonButton<Props>, Props> {
	public component = WiIonButtonComponent;
	public defaults: WiIonButtonSettings = {};
}

export const wiIonButton =
	wiBaseFn<WiIonButtonSettings, null, WiIonButton<any>, any>(WiIonButton);