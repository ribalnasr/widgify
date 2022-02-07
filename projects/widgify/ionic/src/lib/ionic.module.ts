import { NgModule } from "@angular/core";
import { WidgifyIonInputModule } from "./input/input.module";
import { WidgifyIonGridModule } from "./grid/grid.module";
import { WidgifyIonItemModule } from "./item/item.module";
import { WidgifyIonLabelModule } from "./label/label.module";
import { WidgifyIonRowModule } from "./row/row.module";
import { WidgifyIonColModule } from "./col/col.module";
import { WidgifyIonButtonModule } from "./button/button.module";
import { WidgifyIonIconModule } from "./icon/icon.module";

const modules = [
    WidgifyIonInputModule,
    WidgifyIonItemModule,
    WidgifyIonLabelModule,
    WidgifyIonGridModule,
    WidgifyIonRowModule,
    WidgifyIonColModule,
    WidgifyIonButtonModule,
    WidgifyIonIconModule
]

@NgModule({
    exports: [
        ...modules
    ],
    imports: [
        ...modules
    ]
}) export class WidgifyIonicModule { }

