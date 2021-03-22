import { NgModule } from "@angular/core";
import { WidgifyIonInputModule } from "./input/input.module";

@NgModule({
    exports: [
        WidgifyIonInputModule
    ],
    imports: [
        WidgifyIonInputModule
    ]
}) export class WidgifyIonicModule { }

