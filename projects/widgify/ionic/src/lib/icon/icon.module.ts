import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WiIonIconComponent } from './icon.component';

@NgModule({
    declarations: [
        WiIonIconComponent
    ],
    exports: [
        WiIonIconComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-icon.
    ]
}) export class WiIonIconModule { }

export * from './icon.component';
export * from './icon.interface';
export * from './icon.class';

