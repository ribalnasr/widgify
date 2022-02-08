import { Component } from '@angular/core';
import { WidgifyIonIconSettings } from './icon.interface';
import { WidgifyIonBaseComponent } from '../base/base.component';

@Component({
	selector: 'ion-icon',
	templateUrl: './icon.component.html',
})
export class WidgifyIonIconComponent extends WidgifyIonBaseComponent<WidgifyIonIconSettings> {


}
