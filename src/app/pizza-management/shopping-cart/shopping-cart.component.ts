import { Component, OnInit, Input } from '@angular/core';
import { DeliveryInfo } from '../../model/delivery-info';
import { OrderItem } from '../../model/order-item';
import { OrderService } from '../../@shared/services/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @Input() orderMode: string = '';
  orders: OrderItem[] = [];

  constructor(private orderService: OrderService) { 
  }

  ngOnInit() {
    if (this.orderMode == '')
      this.orderMode = 'edit';
  }

  orderNowClick(d): void {
    this.orderMode = 'read';
    this.orderService.setDeliveryInfo(d);
  }

  ordersChanged(orders): void {
    this.orders = orders;

    if (this.orderMode != 'edit'){
      this.orderMode = 'edit';
    }    
  }
}
