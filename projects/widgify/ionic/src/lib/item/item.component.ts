import { Component } from '@angular/core';
import { WidgifyIonItemSettings } from './item.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';
@Component({
	selector: 'ion-item',
	templateUrl: './item.component.html'
})
export class WidgifyIonItemComponent extends WidgifyIonBaseComponent<WidgifyIonItemSettings> {


}
