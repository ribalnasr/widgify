import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { PrefixWidgetComponent } from './widget.component';

@NgModule({
    declarations: [
        PrefixWidgetComponent
    ],
    exports: [
        PrefixWidgetComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the widget.
    ]
}) export class PrefixWidgetModule { }

export * from './widget.component';
export * from './widget.interface';
export * from './widget.class';

