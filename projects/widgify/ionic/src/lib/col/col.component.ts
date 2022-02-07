import { Component } from '@angular/core';
import { WidgifyIonColSettings } from './col.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-col',
	templateUrl: './col.component.html',
})
export class WidgifyIonColComponent extends WidgifyBaseComponent<WidgifyIonColSettings> {

}
