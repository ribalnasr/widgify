import { Component } from '@angular/core';
import { WidgifyTextSettings } from './text.interface';
import { WidgifyBaseComponent } from '@widgify/core';

@Component({
	selector: 'widgify-text',
	templateUrl: './text.component.html',
})
export class WidgifyTextComponent extends WidgifyBaseComponent<WidgifyTextSettings> {

}
