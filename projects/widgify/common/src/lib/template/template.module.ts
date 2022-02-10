import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiTemplateComponent } from './template.component';

@NgModule({
    declarations: [
        WiTemplateComponent
    ],
    exports: [
        WiTemplateComponent
    ],
    imports: [
        CommonModule,
        Widgify,
        // Import here any module that is used by the slot.
    ]
}) export class WiTemplateModule { }

export * from './template.component';
export * from './template.interface';
export * from './template.class';

