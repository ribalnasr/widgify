import { WiBase, wiBaseFn } from '@widgify/core';
import { WiTextSettings } from './text.interface';
import { WiTextComponent } from './text.component';

export class WiText<Props = any> extends WiBase<WiTextSettings, null, WiText<Props>> {
	public component = WiTextComponent;
	public defaults: WiTextSettings = {};

}

export const wiText =
	wiBaseFn<WiTextSettings, null, WiText<any>, any>(WiText);