import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WiIonGridComponent } from './grid.component';

@NgModule({
    declarations: [
        WiIonGridComponent
    ],
    exports: [
        WiIonGridComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-grid.
    ]
}) export class WiIonGridModule { }

export * from './grid.component';
export * from './grid.interface';
export * from './grid.class';

