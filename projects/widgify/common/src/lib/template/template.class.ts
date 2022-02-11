import { WiBase } from '@widgify/core';
import { WiTemplateSettings } from './template.interface';
import { WiTemplateComponent } from './template.component';

export class WiTemplate<Props = any> extends WiBase<WiTemplateSettings, null, WiTemplate<Props>> {
	public component = WiTemplateComponent;

	/**
	 * The default settings for Template.
	 */
	public defaults: WiTemplateSettings = {};

}

export const wiTemplate =
	<Props>(settings?: WiTemplateSettings, props?: Props) =>
		new WiTemplate(settings, props) as WiTemplate<Props>;
