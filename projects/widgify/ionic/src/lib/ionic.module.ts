import { NgModule } from "@angular/core";
import { WiIonInputModule } from "./input/input.module";
import { WiIonGridModule } from "./grid/grid.module";
import { WiIonItemModule } from "./item/item.module";
import { WiIonLabelModule } from "./label/label.module";
import { WiIonRowModule } from "./row/row.module";
import { WiIonColModule } from "./col/col.module";
import { WiIonButtonModule } from "./button/button.module";
import { WiIonIconModule } from "./icon/icon.module";

const modules = [
    WiIonInputModule,
    WiIonItemModule,
    WiIonLabelModule,
    WiIonGridModule,
    WiIonRowModule,
    WiIonColModule,
    WiIonButtonModule,
    WiIonIconModule
]

@NgModule({
    exports: [
        ...modules
    ],
    imports: [
        ...modules
    ]
}) export class WiIonicModule { }

export * from './base/base.module';

export * from './input/input.module';
export * from './item/item.module';
export * from './label/label.module';
export * from './grid/grid.module';
export * from './row/row.module';
export * from './col/col.module';
export * from './button/button.module';
export * from './icon/icon.module';