import { WiBase } from '@widgify/core';
import { WiFormSettings } from './form.interface';
import { WiFormComponent } from './form.component';
import { FormGroup } from '@angular/forms';

export class WiForm<Props = any> extends WiBase<WiFormSettings, FormGroup, WiForm<Props>, Props> {
	public component = WiFormComponent;
	public defaults: WiFormSettings = {};

}


export const wiForm =
	<Props>(settings?: WiFormSettings, props?: Props) =>
		new WiForm(settings, props) as WiForm<Props>;
