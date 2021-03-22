import { Component } from '@angular/core';
import { WidgifyRepeaterSettings } from './repeater.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'widgify-repeater',
	templateUrl: './repeater.component.html',
})
export class WidgifyRepeaterComponent extends WidgifyBaseComponent<WidgifyRepeaterSettings> {


}
