import { WiBase } from '@widgify/core';
import { WiIframeSettings } from './iframe.interface';
import { WiIframeComponent } from './iframe.component';

export class WiIframe<Props = any> extends WiBase<WiIframeSettings, null, WiIframe, Props> {
	public component = WiIframeComponent;

	/**
	 * The default settings for Iframe.
	 */
	public defaults: WiIframeSettings = {};

}

export const wiIframe =
	<Props>(settings?: WiIframeSettings, props?: Props) =>
		new WiIframe(settings, props) as WiIframe<Props>;
