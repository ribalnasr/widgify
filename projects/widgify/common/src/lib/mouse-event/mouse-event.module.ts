import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiMouseEventComponent } from './mouse-event.component';

@NgModule({
    declarations: [
        WiMouseEventComponent
    ],
    exports: [
        WiMouseEventComponent
    ],
    imports: [
        CommonModule,
        Widgify
    ]
}) export class WiMouseEventModule { }

export * from './mouse-event.component';
export * from './mouse-event.interface';
export * from './mouse-event.class';

