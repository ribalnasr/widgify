import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiRepeaterComponent } from './repeater.component';

@NgModule({
    declarations: [
        WiRepeaterComponent
    ],
    exports: [
        WiRepeaterComponent
    ],
    imports: [
        CommonModule,
        Widgify
    ]
}) export class WiRepeaterModule { }

export * from './repeater.component';
export * from './repeater.interface';
export * from './repeater.class';
export * from './repeater-list.class';
export * from './repeater-row.class';

