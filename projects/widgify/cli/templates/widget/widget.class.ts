import { WidgifyBase } from '@widgify/core';
import { PrefixWidgetSettings } from './widget.interface';
import { PrefixWidgetComponent } from './widget.component';

export class PrefixWidget extends WidgifyBase<PrefixWidgetSettings> {
	public override component = PrefixWidgetComponent;

	/**
	 * The default settings for Widget.
	 */
	public override defaults: PrefixWidgetSettings = {};

}

export const prefixWidget = (settings: PrefixWidgetSettings) => new PrefixWidget(settings);