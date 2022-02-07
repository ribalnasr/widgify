import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonIconComponent } from './icon.component';

@NgModule({
    declarations: [
        WidgifyIonIconComponent
    ],
    exports: [
        WidgifyIonIconComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-icon.
    ]
}) export class WidgifyIonIconModule { }

export * from './icon.component';
export * from './icon.interface';
export * from './icon.class';

