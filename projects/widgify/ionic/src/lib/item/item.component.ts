import { Component } from '@angular/core';
import { WiIonItemSettings } from './item.interface';
import { WiIonBaseComponent } from '../base/base.component';
@Component({
	selector: 'ion-item',
	templateUrl: './item.component.html'
})
export class WiIonItemComponent extends WiIonBaseComponent<WiIonItemSettings> {


}
