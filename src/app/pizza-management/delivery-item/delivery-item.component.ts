import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DeliveryInfo } from '../../model/delivery-info';

@Component({
  selector: 'app-delivery-item',
  templateUrl: './delivery-item.component.html',
  styleUrls: ['./delivery-item.component.css']
})
export class DeliveryItemComponent implements OnInit {

  deliveryInfo: DeliveryInfo = new DeliveryInfo();
  validationErrors: string[];
  @Input() orderMode: string;
  @Output() orderNowClickEvent: EventEmitter<DeliveryInfo> = new EventEmitter<DeliveryInfo>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f): void {
    this.validationErrors = [];

    if (!f.invalid){
      this.orderNowClickEvent.emit(this.deliveryInfo);
    }
    else{

      if (f.controls.firstName.errors){
        if (f.controls.firstName.errors.required)
          this.validationErrors.push("First Name is required.");
      }        

      if (f.controls.lastName.errors){
        if (f.controls.lastName.errors.required)
          this.validationErrors.push("First Name is required.");
      }

      if (f.controls.email.errors){
        if (f.controls.email.errors.required)
          this.validationErrors.push("Email is required.");
      }

      if (f.controls.phone.errors){
        if (f.controls.phone.errors.required)
          this.validationErrors.push("Phone is required.");
      }

      if (f.controls.street.errors){
        if (f.controls.street.errors.required)
          this.validationErrors.push("Street is required.");
      }

      if (f.controls.city.errors){
        if (f.controls.city.errors.required)
          this.validationErrors.push("City is required.");
      }

      if (f.controls.zip.errors){
        if (f.controls.zip.errors.required)
          this.validationErrors.push("Zip is required.");
      }

    }
  }

  // TODO: simplify checking of validation errors.
  private addValidationError(control): void {
    if (control.errors){
      
    }
  }
}
