import { NgModule } from "@angular/core";
import { WiDataModule } from "./data/data.module";
import { WiFormModule } from "./form/form.module";
import { WiIframeModule } from "./iframe/iframe.module";
import { WiMouseEventModule } from "./mouse-event/mouse-event.module";
import { WiRepeaterModule } from "./repeater/repeater.module";
import { WiTemplateModule } from "./template/template.module";
import { WiTextModule } from "./text/text.module";

const modules = [
    WiDataModule,
    WiFormModule,
    WiIframeModule,
    WiMouseEventModule,
    WiRepeaterModule,
    WiTextModule,
    WiTemplateModule
]

@NgModule({
    exports: [
        ...modules
    ],
    imports: [
        ...modules
    ]
}) export class WiCommonModule { }

export * from './data/data.module';
export * from './form/form.module';
export * from './iframe/iframe.module';
export * from './repeater/repeater.module';
export * from './text/text.module';
export * from './mouse-event/mouse-event.module';
export * from './template/template.module';


