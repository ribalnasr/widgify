import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiIonRowComponent } from './row.component';

@NgModule({
    declarations: [
        WiIonRowComponent
    ],
    exports: [
        WiIonRowComponent
    ],
    imports: [
        CommonModule,
        Widgify,
        // Import here any module that is used by the ion-row.
    ]
}) export class WiIonRowModule { }

export * from './row.component';
export * from './row.interface';
export * from './row.class';

