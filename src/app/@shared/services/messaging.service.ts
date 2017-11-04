import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { OrderItem } from '../../model/order-item'

@Injectable()
export class MessagingService {

  private selectedMenuItemSubject: BehaviorSubject<OrderItem> = new BehaviorSubject<OrderItem>(null);
  public selectedMenuItem$ = this.selectedMenuItemSubject.asObservable();

  private addOrderItemSubject: BehaviorSubject<OrderItem> = new BehaviorSubject<OrderItem>(null);
  public addOrderItem$ = this.addOrderItemSubject.asObservable();

  constructor() { }

  selectMenuItem(selectedMenuItem): void {
    this.selectedMenuItemSubject.next(selectedMenuItem);
  }

  addOrderItem(orderItem): void {
    this.addOrderItemSubject.next(orderItem);
  }
}
