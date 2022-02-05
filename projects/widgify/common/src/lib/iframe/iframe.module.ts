import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WidgifyModule } from "@widgify/core";
import { WidgifyIframeComponent } from './iframe.component';

@NgModule({
    declarations: [
        WidgifyIframeComponent
    ],
    exports: [
        WidgifyIframeComponent
    ],
    imports: [
        CommonModule,
        WidgifyModule,
        // Import here any module that is used by the iframe.
    ]
}) export class WidgifyIframeModule { }

export * from './iframe.component';
export * from './iframe.interface';
export * from './iframe.class';

