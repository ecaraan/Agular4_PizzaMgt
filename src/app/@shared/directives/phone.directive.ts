import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: 'input[type="text"].phone',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneDirective,
    multi: true
  }]
})

export class PhoneDirective implements Validator {
  
  constructor() { }

  validate(control: AbstractControl): ValidationErrors{
    return this.phoneValidator()(control);
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value){
        let phoneFormat = '^\\(\\d{3}\\)\\s?\\d{3}\\s?\\d{4}$';           
        
        return (new RegExp(phoneFormat)).test(control.value)
          ? null
          : {'formatNotValid' : { value: '(000) 000 0000' }};
      }

      return null;      
    }
  }  
}
