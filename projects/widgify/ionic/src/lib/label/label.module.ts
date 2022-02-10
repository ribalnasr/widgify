import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Widgify } from "@widgify/core";
import { WiTextModule } from "@widgify/common";
import { WiIonLabelComponent } from './label.component';

@NgModule({
    declarations: [
        WiIonLabelComponent
    ],
    exports: [
        WiIonLabelComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        Widgify,
        WiTextModule
    ]
}) export class WiIonLabelModule { }

export * from './label.component';
export * from './label.interface';
export * from './label.class';

