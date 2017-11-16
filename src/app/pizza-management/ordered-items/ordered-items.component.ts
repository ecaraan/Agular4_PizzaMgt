import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';
import { OrderItem } from '../../model/order-item';
import { OrderService } from '../../@shared/services/order.service';
import { MessagingService } from '../../@shared/services/messaging.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit {

  @Input() orderMode: string;
  @Output() ordersChangedEvent: EventEmitter<OrderItem[]> = new EventEmitter<OrderItem[]>();

  private destroyed$ = new Subject(); 
  orders: OrderItem[] = [];

  constructor(private orderService: OrderService, private messagingService: MessagingService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.messagingService.addOrderItem$.takeUntil(this.destroyed$).subscribe(
      o => {
        if (o != null){
          this.orders.push(o)
          this.ordersChangedEvent.emit(this.orders);
        }
      }
    );

    let orderItems = this.orderService.getOrderItems();

    if (orderItems != null && orderItems.length > 0){
      this.orders = orderItems;
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  displayIngredients(ingredients): string {
    return ingredients.map(i => i.name).join(", ");
  }

  displaySize(size): string {
    switch(size){
      case 'regular':
        return 'Regular (9")';
      case 'family':
        return 'Family (12")';
      case 'party':
        return 'Party (14")';
    }
  }

  removeOrderItem(orderItem): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { confirmText: 'Are you sure you want to remove ' + orderItem.name  +'?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if (this.orderService.removeOrderItem(orderItem)){
          this.orders = this.orders.filter(o => o !== orderItem);
          this.ordersChangedEvent.emit(this.orders);
        }
      }
    });    
  }

  getTotal(): number {
    if (this.orders != null && this.orders.length > 0){
      let total: number = 0; 

      this.orders.forEach(_ => total += _.price * _.quantity);
      return total;
    }

    return 0;
  }
}
