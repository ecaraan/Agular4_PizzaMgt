import { NgModule } from '@angular/core';
import {
  FieldLabelDirective
} from './directives/all-directives';


@NgModule({
  declarations: [
    FieldLabelDirective
  ],
  exports: [
    FieldLabelDirective
  ],
})

export class SharedModule { }
