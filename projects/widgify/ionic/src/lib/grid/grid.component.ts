import { Component } from '@angular/core';
import { WidgifyIonGridSettings } from './grid.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-grid',
	templateUrl: './grid.component.html',
})
export class WidgifyIonGridComponent extends WidgifyIonBaseComponent<WidgifyIonGridSettings> {


}
