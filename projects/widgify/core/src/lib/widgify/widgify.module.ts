import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgifyComponent } from './widgify.component';
import { WidgifyBaseComponent } from '../base/base.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		WidgifyComponent,
		WidgifyBaseComponent
	],
	exports: [
		WidgifyComponent,
		WidgifyBaseComponent
	],
})
export class WidgifyModule { }

