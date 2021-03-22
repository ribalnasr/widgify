import { NgModule } from "@angular/core";
import { WidgifyDynamicModule } from "./dynamic/dynamic.module";
import { WidgifyGroupModule } from "./group/group.module";

@NgModule({
    exports: [
        WidgifyDynamicModule,
        WidgifyGroupModule
    ],
    imports: [
        WidgifyDynamicModule,
        WidgifyGroupModule
    ]
}) export class WidgifyCommonModule { }

