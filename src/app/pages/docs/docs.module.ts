import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsPageRoutingModule } from './docs-routing.module';

import { DocsPage } from './docs.page';
import { SidemenuModule } from '../../components/sidemenu/sidemenu.module';
import { MarkdownModule } from 'ngx-markdown';
import { IntroductionPage } from './introduction/introduction.page';
import { UsagePage } from './usage/usage.page';
import { WidgifyModule } from '@widgify/core';
import { WidgifyCommonModule } from '@widgify/common';
import { WidgifyIonicModule } from '@widgify/ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule.forChild(),
    DocsPageRoutingModule,
    SidemenuModule,
    WidgifyModule,
    WidgifyCommonModule,
    WidgifyIonicModule
  ],
  declarations: [
    DocsPage,
    IntroductionPage,
    UsagePage
  ]
})
export class DocsPageModule { }
