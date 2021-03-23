import { WidgifyBase } from '@widgify/core';
import { WidgifyWidgetSettings } from './widget.interface';
import { WidgifyWidgetComponent } from './widget.component';

export class WidgifyWidget extends WidgifyBase<WidgifyWidgetSettings> {
	public component = WidgifyWidgetComponent;

	/**
	 * The default settings for WidgifyWidget.
	 */
	public defaults: WidgifyWidgetSettings = {};

}