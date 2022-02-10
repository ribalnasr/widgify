import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyTextSettings } from './text.interface';
import { WidgifyTextComponent } from './text.component';

export class WidgifyText extends WidgifyBase<WidgifyTextSettings, null, WidgifyText> {
	public component = WidgifyTextComponent;
	public defaults: WidgifyTextSettings = {};

}

export const widgifyText = (settings?: WidgifyTextSettings) => widgifyFn<WidgifyTextSettings, WidgifyText>(WidgifyText)(settings);