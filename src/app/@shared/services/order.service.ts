import { Injectable } from '@angular/core';
import { MenuList } from './menu-list';
import { MenuItem } from '../../model/menu-item';
import { OrderItem } from '../../model/order-item';
import { DeliveryInfo } from '../../model/delivery-info';

@Injectable()
export class OrderService {

    constructor() {
    }

    currentOrder: OrderItem; 
    orders: OrderItem[] = []; // Repository. Can be DB
    deliveryInfo: DeliveryInfo;

    public getMenu(): MenuItem[] {
        return new MenuList().items;
    }

    public addOrderItem(orderItem): void {
        this.orders.push(this.currentOrder);
        this.currentOrder = null;
    }

    public removeOrderItem(orderItem): boolean {
        this.orders = this.orders.filter(o => o !== orderItem);
        return true;
    }

    public setDeliveryInfo(deliveryInfo){
        this.deliveryInfo = deliveryInfo;
    }

    public getDeliveryInfo() : DeliveryInfo {
        if (this.deliveryInfo == null)
            return new DeliveryInfo();

        return this.deliveryInfo;
    }

    public getOrderItems(): OrderItem[] {
        return this.orders;
    }
}
