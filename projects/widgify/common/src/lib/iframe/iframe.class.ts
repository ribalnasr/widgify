import { WidgifyBase } from '@widgify/core';
import { WidgifyIframeSettings } from './iframe.interface';
import { WidgifyIframeComponent } from './iframe.component';

export class WidgifyIframe extends WidgifyBase<WidgifyIframeSettings> {
	public component = WidgifyIframeComponent;

	/**
	 * The default settings for Iframe.
	 */
	public defaults: WidgifyIframeSettings = {};

}

export const widgifyIframe = (settings: WidgifyIframeSettings) => new WidgifyIframe(settings);