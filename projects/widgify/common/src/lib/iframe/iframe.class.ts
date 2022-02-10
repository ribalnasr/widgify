import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyIframeSettings } from './iframe.interface';
import { WidgifyIframeComponent } from './iframe.component';

export class WidgifyIframe extends WidgifyBase<WidgifyIframeSettings, null, WidgifyIframe> {
	public component = WidgifyIframeComponent;

	/**
	 * The default settings for Iframe.
	 */
	public defaults: WidgifyIframeSettings = {};

}

export const widgifyIframe = widgifyFn<WidgifyIframeSettings, WidgifyIframe>(WidgifyIframe);