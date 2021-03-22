import { Component } from '@angular/core';
import { WidgifyGroupSettings } from './group.interface';
import { WidgifyBaseComponent } from '@widgify/core';
@Component({
	selector: 'widgify-group',
	templateUrl: './group.component.html',
})
export class WidgifyGroupComponent extends WidgifyBaseComponent<WidgifyGroupSettings> {


}
