import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { WidgifyModule } from "@widgify/core";
import { WidgifyTextModule } from "../../../../common/src/public-api";
import { WidgifyIonLabelComponent } from './label.component';

@NgModule({
    declarations: [
        WidgifyIonLabelComponent
    ],
    exports: [
        WidgifyIonLabelComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        WidgifyModule,
        WidgifyTextModule
    ]
}) export class WidgifyIonLabelModule { }

export * from './label.component';
export * from './label.interface';
export * from './label.class';

