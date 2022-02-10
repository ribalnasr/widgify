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
import { Widgify } from '@widgify/core';
import { WiCommonModule } from '@widgify/common';
import { WiIonicModule } from '@widgify/ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule.forChild(),
    DocsPageRoutingModule,
    SidemenuModule,
    Widgify,
    WiCommonModule,
    WiIonicModule
  ],
  declarations: [
    DocsPage,
    IntroductionPage,
    UsagePage
  ]
})
export class DocsPageModule { }
