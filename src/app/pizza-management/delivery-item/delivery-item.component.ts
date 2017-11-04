import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DeliveryInfo } from '../../model/delivery-info';

@Component({
  selector: 'app-delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.css']
})
export class DeliveryItemComponent implements OnInit {

  deliveryInfo: DeliveryInfo = new DeliveryInfo();
  @Input() orderMode: string;
  @Output() deliveryInfoChangedEvent: EventEmitter<DeliveryInfo> = new EventEmitter<DeliveryInfo>();

  constructor() { }

  ngOnInit() {
  }

  deliveryInfoChanged(): void {
    this.deliveryInfoChangedEvent.emit(this.deliveryInfo);
  }
}
