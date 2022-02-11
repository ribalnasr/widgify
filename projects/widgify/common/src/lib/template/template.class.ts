import { WiBase, wiBaseFn } from '@widgify/core';
import { WiTemplateSettings } from './template.interface';
import { WiTemplateComponent } from './template.component';

export class WiTemplate<Props = any> extends WiBase<WiTemplateSettings, null, WiTemplate<Props>> {
	public component = WiTemplateComponent;
	public defaults: WiTemplateSettings = {};
}

export const wiTemplate =
	wiBaseFn<WiTemplateSettings, null, WiTemplate<any>, any>(WiTemplate);