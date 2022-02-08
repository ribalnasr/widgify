import { Component } from '@angular/core';
import { WiIonRowSettings } from './row.interface';
import { WiIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-row',
	templateUrl: './row.component.html',
})
export class WiIonRowComponent extends WiIonBaseComponent<WiIonRowSettings> {


}
