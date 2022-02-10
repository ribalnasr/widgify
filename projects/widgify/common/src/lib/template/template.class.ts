import { WiBase, widgifyFn } from '@widgify/core';
import { WiTemplateSettings } from './template.interface';
import { WiTemplateComponent } from './template.component';

export class WiTemplate extends WiBase<WiTemplateSettings, null, WiTemplate> {
	public component = WiTemplateComponent;

	/**
	 * The default settings for Template.
	 */
	public defaults: WiTemplateSettings = {};

}

export const wiTemplate = (settings?: WiTemplateSettings) => widgifyFn<WiTemplateSettings, WiTemplate>(WiTemplate)(settings);