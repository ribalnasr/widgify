import { NgModule } from "@angular/core";
import { WidgifyDynamicModule } from "./dynamic/dynamic.module";
import { WidgifyFormModule } from "./form/form.module";
import { WidgifyGroupModule } from "./group/group.module";
import { WidgifyIframeModule } from "./iframe/iframe.module";
import { WidgifyMouseEventModule } from "./mouse-event/mouse-event.module";
import { WidgifyRepeaterModule } from "./repeater/repeater.module";
import { WidgifyTextModule } from "./text/text.module";

const modules = [
    WidgifyTextModule,
    WidgifyDynamicModule,
    WidgifyGroupModule,
    WidgifyIframeModule,
    WidgifyRepeaterModule,
    WidgifyFormModule,
    WidgifyMouseEventModule
]

@NgModule({
    exports: [
        ...modules
    ],
    imports: [
        ...modules
    ]
}) export class WidgifyCommonModule { }

