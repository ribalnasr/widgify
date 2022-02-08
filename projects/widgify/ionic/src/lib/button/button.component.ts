import { Component } from '@angular/core';
import { WidgifyIonButtonSettings } from './button.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-button',
	templateUrl: './button.component.html',
})
export class WidgifyIonButtonComponent extends WidgifyIonBaseComponent<WidgifyIonButtonSettings> {


}
