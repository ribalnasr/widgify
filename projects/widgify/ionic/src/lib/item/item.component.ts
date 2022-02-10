import { Component } from '@angular/core';
import { WiIonItemSettings } from './item.interface';
import { WiIonBaseComponent } from '../base/base.component';
import { WiIonItem } from './item.class';
@Component({
	selector: 'ion-item',
	templateUrl: './item.component.html'
})
export class WiIonItemComponent extends WiIonBaseComponent<WiIonItemSettings, null, WiIonItem> {


}
