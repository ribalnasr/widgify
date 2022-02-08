import { Component } from '@angular/core';
import { WiIonGridSettings } from './grid.interface';
import { WiIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-grid',
	templateUrl: './grid.component.html',
})
export class WiIonGridComponent extends WiIonBaseComponent<WiIonGridSettings> {


}
