import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WidgifyModule } from "@widgify/core";
import { WidgifyFormComponent } from './form.component';

@NgModule({
    declarations: [
        WidgifyFormComponent
    ],
    exports: [
        WidgifyFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        WidgifyModule
    ]
}) export class WidgifyFormModule { }

export * from './form.component';
export * from './form.interface';
export * from './form.class';

