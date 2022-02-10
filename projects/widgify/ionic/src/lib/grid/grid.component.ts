import { Component } from '@angular/core';
import { WiIonGridSettings } from './grid.interface';
import { WiIonBaseComponent } from '../base/base.component';
import { WiIonGrid } from './grid.class';

@Component({
	selector: 'ion-grid',
	templateUrl: './grid.component.html',
})
export class WiIonGridComponent extends WiIonBaseComponent<WiIonGridSettings, null, WiIonGrid> {


}
