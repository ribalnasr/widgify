import { TemplateRef } from '@angular/core';
import { WidgifySettings } from '@widgify/core';

export interface WidgifySlotSettings extends WidgifySettings {
	template?: TemplateRef<any>;
	context?: any;
}
