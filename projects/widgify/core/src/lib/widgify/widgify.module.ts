import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgifyComponent, WidgifyDirective } from './widgify.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		WidgifyComponent,
		WidgifyDirective,
	],
	exports: [
		WidgifyComponent,
		WidgifyDirective,
	],
})
export class WidgifyModule { }

