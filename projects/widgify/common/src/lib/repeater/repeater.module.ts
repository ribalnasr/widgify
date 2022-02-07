import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyRepeaterComponent } from './repeater.component';

@NgModule({
    declarations: [
        WidgifyRepeaterComponent
    ],
    exports: [
        WidgifyRepeaterComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule
    ]
}) export class WidgifyRepeaterModule { }

export * from './repeater.component';
export * from './repeater.interface';
export * from './repeater.class';
export * from './repeater-list.class';
export * from './repeater-row.class';

