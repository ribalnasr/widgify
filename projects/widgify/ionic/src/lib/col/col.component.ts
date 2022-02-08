import { Component } from '@angular/core';
import { WidgifyIonColSettings } from './col.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-col',
	templateUrl: './col.component.html',
})
export class WidgifyIonColComponent extends WidgifyIonBaseComponent<WidgifyIonColSettings> {

}
