import { WiSettings } from '@widgify/core';

export interface WiIframeSettings extends WiSettings {

	/**
	 * @param src
	 * 
	 * The url on the page to open in this iframe.
	 */
	src?: string;
}
