import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonColComponent } from './col.component';

@NgModule({
    declarations: [
        WidgifyIonColComponent
    ],
    exports: [
        WidgifyIonColComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-col.
    ]
}) export class WidgifyIonColModule { }

export * from './col.component';
export * from './col.interface';
export * from './col.class';

