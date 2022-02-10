import { WiBase, widgifyFn } from '@widgify/core';
import { WiIframeSettings } from './iframe.interface';
import { WiIframeComponent } from './iframe.component';

export class WiIframe extends WiBase<WiIframeSettings, null, WiIframe> {
	public component = WiIframeComponent;

	/**
	 * The default settings for Iframe.
	 */
	public defaults: WiIframeSettings = {};

}

export const wiIframe = widgifyFn<WiIframeSettings, WiIframe>(WiIframe);