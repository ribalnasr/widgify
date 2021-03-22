import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { WidgifyModule } from '@widgify/core';
import { WidgifyCommonModule } from '@widgify/common';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgifyModule,
    WidgifyCommonModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
