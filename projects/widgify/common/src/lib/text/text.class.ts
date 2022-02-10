import { WiBase, widgifyFn } from '@widgify/core';
import { WiTextSettings } from './text.interface';
import { WiTextComponent } from './text.component';

export class WiText extends WiBase<WiTextSettings, null, WiText> {
	public component = WiTextComponent;
	public defaults: WiTextSettings = {};

}

export const wiText = (settings?: WiTextSettings) => widgifyFn<WiTextSettings, WiText>(WiText)(settings);