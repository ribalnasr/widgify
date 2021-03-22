import { Component } from '@angular/core';
import { WidgifyIonInputSettings } from './input.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'widgify-ion-input',
	templateUrl: './input.component.html',
})
export class WidgifyIonInputComponent extends WidgifyBaseComponent<WidgifyIonInputSettings> {


}
