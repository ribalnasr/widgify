import { Component } from '@angular/core';
import { WiIonIconSettings } from './icon.interface';
import { WiIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-icon',
	templateUrl: './icon.component.html',
})
export class WiIonIconComponent extends WiIonBaseComponent<WiIonIconSettings> {


}
