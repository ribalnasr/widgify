import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyGroupComponent } from './group.component';

@NgModule({
    declarations: [
        WidgifyGroupComponent
    ],
    exports: [
        WidgifyGroupComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule
    ]
}) export class WidgifyGroupModule { }

export * from './group.component';
export * from './group.interface';
export * from './group.class';

