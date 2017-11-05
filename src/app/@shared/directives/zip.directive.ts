import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: 'input[type="text"].zip',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipDirective,
    multi: true
  }]
})

export class ZipDirective implements Validator {
  
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    // let allowed = '^[a-zA-Z]{2}\d{2}\s\d[a-zA-Z]{2}$';
    // if (!this.rgx.test(allowed)){
    //   event.preventDefault();
    // }
  }

  validate(control: AbstractControl): ValidationErrors{
    return this.zipValidator()(control);
  }

  zipValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value){
        let zipFormat = '^[a-zA-Z]{2}\\d{2}\\s\\d[a-zA-Z]{2}$';           
        
        return (new RegExp(zipFormat)).test(control.value)
          ? null
          : {'formatNotValid' : { value: 'XX00 0XX' }};
      }

      return null;      
    }
  }  
}
