import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../@shared/services/order.service';
import { MessagingService } from '../../@shared/services/messaging.service';
import { MenuItem } from '../../model/menu-item';
import { OrderItem } from '../../model/order-item';


@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  menu: MenuItem[];

  constructor(private orderService: OrderService, private messagingService: MessagingService) {
    this.menu = orderService.getMenu();
  }

  ngOnInit() {
  }

  selectMenuItem(menuItem): void {
    let orderItem = new OrderItem();

    orderItem.name = menuItem.name;
    orderItem.ingredients = menuItem.ingredients;
    orderItem.regularPrice = menuItem.regularPrice;
    orderItem.familyPrice = menuItem.familyPrice;
    orderItem.partyPrice = menuItem.partyPrice;
    orderItem.imageUrl = menuItem.imageUrl;
    orderItem.size = 'regular';
    orderItem.price = menuItem.regularPrice;
    orderItem.quantity = 1;

    this.orderService.currentOrder = orderItem;
    this.messagingService.selectMenuItem(orderItem);
  }
}
