import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[allowedValues]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AllowedValuesDirective,
    multi: true
  }]
})

export class AllowedValuesDirective implements Validator  {

  @Input() allowedValues: string = ''; 

  constructor() { } 

  validate(control: AbstractControl): ValidationErrors{
    return this.allowedValues ? this.allowedValuesValidator()(control) : null;
  }

  allowedValuesValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value && this.allowedValues.length > 0){
        let allowedList = this.allowedValues.toLowerCase().split(',').map(item => item.trim());        
        
        return allowedList.indexOf(control.value.toLowerCase()) == -1
          ? {'valueNotAllowed' : { value: this.allowedValues }}
          : null;
      }

      return null;      
    }
  }

}
