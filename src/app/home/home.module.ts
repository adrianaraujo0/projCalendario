import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
 /** ts importando calendario */
import { NgCalendarModule } from 'ionic7-calendar';

 /** importando localização em portugues*/
 import { registerLocaleData } from '@angular/common';
 import localePt from '@angular/common/locales/pt';

// Registrando a localização para português
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    //ng Calendar
    NgCalendarModule,
  ],
  declarations: [HomePage],
  //localização para português
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class HomePageModule {}
