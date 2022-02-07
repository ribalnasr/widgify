import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifySlotComponent } from './slot.component';

@NgModule({
    declarations: [
        WidgifySlotComponent
    ],
    exports: [
        WidgifySlotComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the slot.
    ]
}) export class WidgifySlotModule { }

export * from './slot.component';
export * from './slot.interface';
export * from './slot.class';

