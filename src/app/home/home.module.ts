import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Widgify } from '@widgify/core';
import { WiCommonModule } from '@widgify/common';
import { WiIonicModule } from '@widgify/ionic';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Widgify,
    WiCommonModule,
    WiIonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
