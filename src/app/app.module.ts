import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaManagementModule } from './pizza-management/pizza-management.module';
import { OrderService } from './@shared/services/order.service';
import { MessagingService } from './@shared/services/messaging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaManagementModule
  ],
  providers: [OrderService, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
