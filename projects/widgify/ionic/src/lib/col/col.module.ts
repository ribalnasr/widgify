import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WiIonColComponent } from './col.component';

@NgModule({
    declarations: [
        WiIonColComponent
    ],
    exports: [
        WiIonColComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-col.
    ]
}) export class WiIonColModule { }

export * from './col.component';
export * from './col.interface';
export * from './col.class';

