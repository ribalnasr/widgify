import { WidgifyBase } from '@widgify/core';
import { WidgetSettings } from './widget.interface';
import { WidgetComponent } from './widget.component';

export class Widget extends WidgifyBase<WidgetSettings> {
	public override component = WidgetComponent;

	/**
	 * The default settings for Widget.
	 */
	public override defaults: WidgetSettings = {};

}