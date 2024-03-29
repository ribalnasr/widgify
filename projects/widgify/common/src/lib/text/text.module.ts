import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiTextComponent } from './text.component';

@NgModule({
    declarations: [
        WiTextComponent
    ],
    exports: [
        WiTextComponent
    ],
    imports: [
        CommonModule,
        Widgify
    ]
}) export class WiTextModule { }

export * from './text.component';
export * from './text.interface';
export * from './text.class';

