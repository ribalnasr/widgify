import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiIonButtonComponent } from './button.component';

@NgModule({
    declarations: [
        WiIonButtonComponent
    ],
    exports: [
        WiIonButtonComponent
    ],
    imports: [
        CommonModule,
        Widgify,
        // Import here any module that is used by the ion-button.
    ]
}) export class WiIonButtonModule { }

export * from './button.component';
export * from './button.interface';
export * from './button.class';

