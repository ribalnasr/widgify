import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WidgifyModule } from '@widgify/core';
import { WidgifyCommonModule } from '@widgify/common';
import { WidgifyIonicModule } from '@widgify/ionic';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgifyModule,
    WidgifyCommonModule,
    WidgifyIonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
