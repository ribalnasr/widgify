import { WidgifyBase } from '@widgify/core';
import { WidgifyGroupSettings } from './group.interface';
import { WidgifyGroupComponent } from './group.component';

export class WidgifyGroup extends WidgifyBase<WidgifyGroupSettings> {
	public component = WidgifyGroupComponent;
	public defaults: WidgifyGroupSettings = { widgets: [] };

}
export const widgifyGroup = (settings: WidgifyGroupSettings) => new WidgifyGroup(settings);