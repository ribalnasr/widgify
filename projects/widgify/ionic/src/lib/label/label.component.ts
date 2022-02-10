import { Component } from '@angular/core';
import { WiIonLabelSettings } from './label.interface';
import { WiIonBaseComponent } from '../base/base.component';
import { WiIonLabel } from './label.class';
@Component({
	selector: 'ion-label',
	templateUrl: './label.component.html',
})
export class WiIonLabelComponent extends WiIonBaseComponent<WiIonLabelSettings, null, WiIonLabel> {


}
