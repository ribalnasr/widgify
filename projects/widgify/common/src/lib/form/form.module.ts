import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Widgify } from "@widgify/core";
import { WiFormComponent } from './form.component';

@NgModule({
    declarations: [
        WiFormComponent
    ],
    exports: [
        WiFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Widgify
    ]
}) export class WiFormModule { }

export * from './form.component';
export * from './form.interface';
export * from './form.class';

