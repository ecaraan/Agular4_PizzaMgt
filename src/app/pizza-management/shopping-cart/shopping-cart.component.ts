import { Component, OnInit } from '@angular/core';
import { DeliveryInfo } from '../../model/delivery-info';
import { OrderItem } from '../../model/order-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderMode: string = 'edit';
  orders: OrderItem[] = [];
  deliveryInfo: DeliveryInfo = new DeliveryInfo();

  constructor() { 
  }

  ngOnInit() {
  }

  deliveryInfoChanged(d): void {
    this.deliveryInfo = d;
  }

  ordersChanged(orders): void {
    this.orders = orders;

    if (this.orderMode != 'edit'){
      this.orderMode = 'edit';
    }    
  }

  orderNow(): void {
    this.orderMode = 'read';
  }
}
