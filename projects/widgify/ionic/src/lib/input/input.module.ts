import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { WidgifyModule } from "@widgify/core";
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
        WidgifyModule,
        ReactiveFormsModule
    ]
}) export class WiIonInputModule { }

export * from './input.component';
export * from './input.interface';
export * from './input.class';

