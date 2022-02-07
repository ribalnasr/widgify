import { Component } from '@angular/core';
import { WidgifyIonGridSettings } from './grid.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'ion-grid',
	templateUrl: './grid.component.html',
})
export class WidgifyIonGridComponent extends WidgifyBaseComponent<WidgifyIonGridSettings> {


}
