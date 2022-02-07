import { Component } from '@angular/core';
import { WidgifyIonRowSettings } from './row.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-row',
	templateUrl: './row.component.html',
})
export class WidgifyIonRowComponent extends WidgifyBaseComponent<WidgifyIonRowSettings> {


}
