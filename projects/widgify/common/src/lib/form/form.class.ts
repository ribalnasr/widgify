import { WiBase, wiBaseFn } from '@widgify/core';
import { WiFormSettings } from './form.interface';
import { WiFormComponent } from './form.component';
import { FormGroup } from '@angular/forms';

export class WiForm<Props = any> extends WiBase<WiFormSettings, FormGroup, WiForm<Props>, Props> {
	public component = WiFormComponent;
	public defaults: WiFormSettings = {};
}

export const wiForm =
	wiBaseFn<WiFormSettings, FormGroup, WiForm<any>, any>(WiForm);