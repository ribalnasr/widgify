import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Widgify } from "@widgify/core";
import { WiIonInputComponent } from './input.component';

@NgModule({
    declarations: [
        WiIonInputComponent
    ],
    exports: [
        WiIonInputComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        Widgify,
        ReactiveFormsModule
    ]
}) export class WiIonInputModule { }

export * from './input.component';
export * from './input.interface';
export * from './input.class';

