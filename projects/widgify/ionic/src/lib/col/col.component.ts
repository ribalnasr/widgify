import { Component } from '@angular/core';
import { WiIonColSettings } from './col.interface';
import { WiIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-col',
	templateUrl: './col.component.html',
})
export class WiIonColComponent extends WiIonBaseComponent<WiIonColSettings> {

}
