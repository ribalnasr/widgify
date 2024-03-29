import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { Widgify } from "@widgify/core";
import { WiIonItemComponent } from './item.component';

@NgModule({
    declarations: [
        WiIonItemComponent
    ],
    exports: [
        WiIonItemComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        Widgify,
    ]
}) export class WiIonItemModule { }

export * from './item.component';
export * from './item.interface';
export * from './item.class';

