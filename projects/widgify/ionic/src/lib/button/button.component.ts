import { Component } from '@angular/core';
import { WiIonButtonSettings } from './button.interface';
import { WiIonBaseComponent } from '../base/base.component';
import { WiIonButton } from './button.class';

@Component({
	selector: 'ion-button',
	templateUrl: './button.component.html',
})
export class WiIonButtonComponent extends WiIonBaseComponent<WiIonButtonSettings, null, WiIonButton> {


}
