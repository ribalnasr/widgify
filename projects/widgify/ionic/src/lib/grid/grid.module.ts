import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonGridComponent } from './grid.component';

@NgModule({
    declarations: [
        WidgifyIonGridComponent
    ],
    exports: [
        WidgifyIonGridComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-grid.
    ]
}) export class WidgifyIonGridModule { }

export * from './grid.component';
export * from './grid.interface';
export * from './grid.class';

