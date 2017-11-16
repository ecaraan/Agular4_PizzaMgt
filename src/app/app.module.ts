import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaManagementModule } from './pizza-management/pizza-management.module';
import { OrderService } from './@shared/services/order.service';
import { MessagingService } from './@shared/services/messaging.service';
import { PizzaManagementRoutingModule } from './pizza-management/pizza-management-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PizzaManagementModule,
    PizzaManagementRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [OrderService, MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
