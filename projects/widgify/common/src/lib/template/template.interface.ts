import { TemplateRef } from '@angular/core';
import { WiSettings } from '@widgify/core';

export interface WiTemplateSettings extends WiSettings {
	template?: TemplateRef<any>;
	context?: any;
}
