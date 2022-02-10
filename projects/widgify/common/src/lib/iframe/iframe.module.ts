import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Widgify } from "@widgify/core";
import { WiIframeComponent } from './iframe.component';

@NgModule({
    declarations: [
        WiIframeComponent
    ],
    exports: [
        WiIframeComponent
    ],
    imports: [
        CommonModule,
        Widgify,
        // Import here any module that is used by the iframe.
    ]
}) export class WiIframeModule { }

export * from './iframe.component';
export * from './iframe.interface';
export * from './iframe.class';

