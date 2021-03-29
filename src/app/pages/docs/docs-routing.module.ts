import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsPage } from './docs.page';
import { IntroductionPage } from './introduction/introduction.page';
import { UsagePage } from './usage/usage.page';

const routes: Routes = [
  {
    path: '',
    component: DocsPage,
    children: [
      {
        path: 'introduction',
        component: IntroductionPage,
      },
      {
        path: 'usage',
        component: UsagePage,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsPageRoutingModule { }
