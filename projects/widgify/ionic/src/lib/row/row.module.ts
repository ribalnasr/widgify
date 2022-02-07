import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonRowComponent } from './row.component';

@NgModule({
    declarations: [
        WidgifyIonRowComponent
    ],
    exports: [
        WidgifyIonRowComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-row.
    ]
}) export class WidgifyIonRowModule { }

export * from './row.component';
export * from './row.interface';
export * from './row.class';

