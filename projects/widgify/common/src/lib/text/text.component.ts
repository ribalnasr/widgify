import { Component } from '@angular/core';
import { WidgifyTextSettings } from './text.interface';
import { WidgifyBaseComponent } from '@widgify/core';
import { WidgifyText } from './text.class';

@Component({
	selector: 'span',
	templateUrl: './text.component.html',
})
export class WidgifyTextComponent extends WidgifyBaseComponent<WidgifyTextSettings, null, WidgifyText> {

}
