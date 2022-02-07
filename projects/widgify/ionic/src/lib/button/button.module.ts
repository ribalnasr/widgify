import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonButtonComponent } from './button.component';

@NgModule({
    declarations: [
        WidgifyIonButtonComponent
    ],
    exports: [
        WidgifyIonButtonComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the ion-button.
    ]
}) export class WidgifyIonButtonModule { }

export * from './button.component';
export * from './button.interface';
export * from './button.class';

