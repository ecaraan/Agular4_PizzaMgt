import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../@shared/services/order.service';
import { MessagingService } from '../../@shared/services/messaging.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private orderService: OrderService, private messagingService: MessagingService) { }

  ngOnInit() {
  }

  addOrderItem(): void {
    let orderItem = this.orderService.currentOrder;

    if (orderItem != undefined){
      this.orderService.addOrderItem(orderItem);
      this.messagingService.addOrderItem(orderItem);
      this.messagingService.selectMenuItem(null);
    }
  }

}
