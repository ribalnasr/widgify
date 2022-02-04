import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgifyComponent } from './widgify.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		WidgifyComponent,
	],
	exports: [
		WidgifyComponent,
	],
})
export class WidgifyModule { }

