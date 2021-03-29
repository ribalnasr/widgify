import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  imports: [
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ]
})
export class ProvidersModule { }
