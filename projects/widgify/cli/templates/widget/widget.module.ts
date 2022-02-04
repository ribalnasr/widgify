import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgetComponent } from './widget.component';

@NgModule({
    declarations: [
        WidgetComponent
    ],
    exports: [
        WidgetComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the widget.
    ]
}) export class WidgetModule { }

export * from './widget.component';
export * from './widget.interface';
export * from './widget.class';

