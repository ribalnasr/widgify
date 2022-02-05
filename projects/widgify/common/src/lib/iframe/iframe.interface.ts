import { WidgifySettings } from '@widgify/core';

export interface WidgifyIframeSettings extends WidgifySettings {

	/**
	 * @param src
	 * 
	 * The url on the page to open in this iframe.
	 */
	src?: string;
}
