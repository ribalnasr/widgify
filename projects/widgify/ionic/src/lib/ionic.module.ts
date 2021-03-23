import { NgModule } from "@angular/core";
import { WidgifyIonInputModule } from "./input/input.module";
import { WidgifyIonItemModule } from "./item/item.module";
import { WidgifyIonLabelModule } from "./label/label.module";

const modules = [
    WidgifyIonInputModule,
    WidgifyIonItemModule,
    WidgifyIonLabelModule
]

@NgModule({
    exports: [
        ...modules
    ],
    imports: [
        ...modules
    ]
}) export class WidgifyIonicModule { }

