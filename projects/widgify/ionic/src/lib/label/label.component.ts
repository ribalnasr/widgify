import { Component } from '@angular/core';
import { WiIonLabelSettings } from './label.interface';
import { WiIonBaseComponent } from '../base/base.component';
@Component({
	selector: 'ion-label',
	templateUrl: './label.component.html',
})
export class WiIonLabelComponent extends WiIonBaseComponent<WiIonLabelSettings> {


}
