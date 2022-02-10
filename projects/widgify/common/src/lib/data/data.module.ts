import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiDataComponent } from './data.component';

@NgModule({
    declarations: [
        WiDataComponent
    ],
    exports: [
        WiDataComponent
    ],
    imports: [
        CommonModule,
        Widgify
    ]
}) export class WiDataModule { }

export * from './data.component';
export * from './data.interface';
export * from './data.class';

