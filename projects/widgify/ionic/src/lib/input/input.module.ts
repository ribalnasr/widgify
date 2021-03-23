import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonInputComponent } from './input.component';

@NgModule({
    declarations: [
        WidgifyIonInputComponent
    ],
    exports: [
        WidgifyIonInputComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        WidgifyModule,
        ReactiveFormsModule
    ]
}) export class WidgifyIonInputModule { }

export * from './input.component';
export * from './input.interface';
export * from './input.class';

