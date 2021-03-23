import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyTextComponent } from './text.component';

@NgModule({
    declarations: [
        WidgifyTextComponent
    ],
    exports: [
        WidgifyTextComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule
    ]
}) export class WidgifyTextModule { }

export * from './text.component';
export * from './text.interface';
export * from './text.class';

