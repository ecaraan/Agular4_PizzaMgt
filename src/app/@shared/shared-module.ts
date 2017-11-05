import { NgModule } from '@angular/core';
import {
  FieldLabelDirective,
  AllowedValuesDirective
} from './directives/all-directives';


@NgModule({
  declarations: [
    FieldLabelDirective,
    AllowedValuesDirective
  ],
  exports: [
    FieldLabelDirective,
    AllowedValuesDirective
  ],
})

export class SharedModule { }
