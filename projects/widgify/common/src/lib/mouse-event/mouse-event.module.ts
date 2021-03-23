import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyMouseEventComponent } from './mouse-event.component';

@NgModule({
    declarations: [
        WidgifyMouseEventComponent
    ],
    exports: [
        WidgifyMouseEventComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule
    ]
}) export class WidgifyMouseEventModule { }

export * from './mouse-event.component';
export * from './mouse-event.interface';
export * from './mouse-event.class';

