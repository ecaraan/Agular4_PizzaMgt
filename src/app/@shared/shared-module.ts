import { NgModule } from '@angular/core';
import {
  FieldLabelDirective,
  AllowedValuesDirective,
  ZipDirective,
  PhoneDirective
} from './directives/all-directives';


@NgModule({
  declarations: [
    FieldLabelDirective,
    AllowedValuesDirective,
    ZipDirective,
    PhoneDirective
  ],
  exports: [
    FieldLabelDirective,
    AllowedValuesDirective,
    ZipDirective,
    PhoneDirective
  ],
})

export class SharedModule { }
