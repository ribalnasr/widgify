import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyDynamicComponent } from './dynamic.component';

@NgModule({
    declarations: [
        WidgifyDynamicComponent
    ],
    exports: [
        WidgifyDynamicComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule
    ]
}) export class WidgifyDynamicModule { }

export * from './dynamic.component';
export * from './dynamic.interface';
export * from './dynamic.class';

