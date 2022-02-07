import { WidgifyBase } from '@widgify/core';
import { WidgifySlotSettings } from './slot.interface';
import { WidgifySlotComponent } from './slot.component';

export class WidgifySlot extends WidgifyBase<WidgifySlotSettings> {
	public component = WidgifySlotComponent;

	/**
	 * The default settings for Slot.
	 */
	public defaults: WidgifySlotSettings = {};

}

export const widgifySlot = (settings: WidgifySlotSettings) => new WidgifySlot(settings);