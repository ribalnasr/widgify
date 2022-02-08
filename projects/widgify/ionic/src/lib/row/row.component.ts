import { Component } from '@angular/core';
import { WidgifyIonRowSettings } from './row.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-row',
	templateUrl: './row.component.html',
})
export class WidgifyIonRowComponent extends WidgifyIonBaseComponent<WidgifyIonRowSettings> {


}
