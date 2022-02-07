import { WidgifyBase } from '@widgify/core';
import { WidgifyTextSettings } from './text.interface';
import { WidgifyTextComponent } from './text.component';

export class WidgifyText extends WidgifyBase<WidgifyTextSettings> {
	public component = WidgifyTextComponent;
	public defaults: WidgifyTextSettings = {};

}

export const widgifyText = (settings: WidgifyTextSettings) => new WidgifyText(settings);