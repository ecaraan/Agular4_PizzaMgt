import { NgModule } from '@angular/core';
import { MatInputModule, MatDialogModule, MatFormFieldModule } from '@angular/material';

@NgModule({ 
  exports: [
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})

export class MaterialModule { }
