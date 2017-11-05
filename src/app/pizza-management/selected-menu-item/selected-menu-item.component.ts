import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../@shared/services/order.service';
import { MessagingService } from '../../@shared/services/messaging.service';
import { OrderItem } from '../../model/order-item';
import { Subject, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-selected-menu-item',
  templateUrl: './selected-menu-item.component.html',
  styleUrls: ['./selected-menu-item.component.css']
})
export class SelectedMenuItemComponent implements OnInit {

  private destroyed$ = new Subject();
  menuItem: OrderItem;
  price: number = 0;
  size: string = '';

  constructor(private orderService: OrderService, private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.selectedMenuItem$.takeUntil(this.destroyed$).subscribe(
      m => {
        if (m != null){
          this.menuItem = m;
          this.size = m.size;
          this.price = m.price;
        }
        else{
          this.menuItem = new OrderItem();
          this.size = '';
          this.price = 0;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  sizeSelected(size): void {    
    this.price = this.getPrice(size);

    if (this.orderService.currentOrder){
      this.orderService.currentOrder.size = size;
      this.orderService.currentOrder.price = this.price;
    }    
  }

  private getPrice(size): number {
    switch(size){
      case 'regular':
        return this.menuItem.regularPrice;
      case 'family':
        return this.menuItem.familyPrice;
      case 'party':
        return this.menuItem.partyPrice;
    }
  }
}
