import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyWidgetComponent } from './widget.component';

@NgModule({
    declarations: [
        WidgifyWidgetComponent
    ],
    exports: [
        WidgifyWidgetComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the widget.
    ]
}) export class WidgifyWidgetModule { }

export * from './widget.component';
export * from './widget.interface';
export * from './widget.class';

