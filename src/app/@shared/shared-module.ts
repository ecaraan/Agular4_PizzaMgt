import { NgModule } from '@angular/core';
import {
  FieldLabelDirective,
  AllowedValuesDirective,
  ZipDirective
} from './directives/all-directives';


@NgModule({
  declarations: [
    FieldLabelDirective,
    AllowedValuesDirective,
    ZipDirective
  ],
  exports: [
    FieldLabelDirective,
    AllowedValuesDirective,
    ZipDirective
  ],
})

export class SharedModule { }
