import { WiBase, widgifyFn } from '@widgify/core';
import { WiFormSettings } from './form.interface';
import { WiFormComponent } from './form.component';
import { FormGroup } from '@angular/forms';

export class WiForm extends WiBase<WiFormSettings, FormGroup, WiForm> {
	public component = WiFormComponent;
	public defaults: WiFormSettings = {};

}


export const wiForm = widgifyFn<WiFormSettings, WiForm>(WiForm);
