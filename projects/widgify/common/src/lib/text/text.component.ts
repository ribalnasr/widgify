import { Component } from '@angular/core';
import { WiTextSettings } from './text.interface';
import { WiBaseComponent } from '@widgify/core';
import { WiText } from './text.class';

@Component({
	selector: 'span',
	templateUrl: './text.component.html',
})
export class WiTextComponent extends WiBaseComponent<WiTextSettings, null, WiText> {

}
