import { WiBase, wiBaseFn } from '@widgify/core';
import { WiIframeSettings } from './iframe.interface';
import { WiIframeComponent } from './iframe.component';

export class WiIframe<Props = any> extends WiBase<WiIframeSettings, null, WiIframe, Props> {
	public component = WiIframeComponent;
	public defaults: WiIframeSettings = {};
}

export const wiIframe =
	wiBaseFn<WiIframeSettings, null, WiIframe<any>, any>(WiIframe);