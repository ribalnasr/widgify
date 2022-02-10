import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WiComponent, WiDirective } from './widgify.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		WiComponent,
		WiDirective,
	],
	exports: [
		WiComponent,
		WiDirective,
	],
})
export class Widgify { }

