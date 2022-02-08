import { WidgifyBase, widgifyFn } from '@widgify/core';
import { WidgifyGroupSettings } from './group.interface';
import { WidgifyGroupComponent } from './group.component';

export class WidgifyGroup extends WidgifyBase<WidgifyGroupSettings> {
	public component = WidgifyGroupComponent;
	public defaults: WidgifyGroupSettings = {};

}
export const widgifyGroup = widgifyFn<WidgifyGroupSettings, WidgifyGroup>(WidgifyGroup);