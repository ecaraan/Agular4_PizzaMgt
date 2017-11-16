import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { SelectedMenuItemComponent } from './selected-menu-item/selected-menu-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { DeliveryItemComponent } from './delivery-item/delivery-item.component';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../@shared/shared-module';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { PizzaManagementRoutingModule } from './pizza-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PizzaManagementRoutingModule
  ],
  exports: [
    MainpageComponent, MenuComponent, ShoppingCartComponent, MenuItemsComponent, SelectedMenuItemComponent, CartItemComponent, DeliveryItemComponent, OrderedItemsComponent, PaymentComponent, OrderComponent
  ],
  declarations: [MainpageComponent, MenuComponent, ShoppingCartComponent, MenuItemsComponent, SelectedMenuItemComponent, CartItemComponent, DeliveryItemComponent, OrderedItemsComponent, PaymentComponent, OrderComponent]
})
export class PizzaManagementModule { }
