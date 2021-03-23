import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIonItemComponent } from './item.component';

@NgModule({
    declarations: [
        WidgifyIonItemComponent
    ],
    exports: [
        WidgifyIonItemComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        WidgifyModule,
    ]
}) export class WidgifyIonItemModule { }

export * from './item.component';
export * from './item.interface';
export * from './item.class';

