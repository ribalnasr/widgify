import { WiBase, WiSettings } from '@widgify/core';

export interface WiMouseEventSettings extends WiSettings {
	click?: (event?: MouseEvent) => any;

}
