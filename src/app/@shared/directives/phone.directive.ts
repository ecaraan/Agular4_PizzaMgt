import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, NgModel } from '@angular/forms';
import { MaskHelper } from '../helpers/mask-helper';

@Directive({
  selector: 'input[type="text"].phone',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneDirective,
    multi: true
  }]
})

export class PhoneDirective implements Validator {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);

  private maskHelper: MaskHelper;
  
  constructor(private el: ElementRef) {
    this.maskHelper = new MaskHelper(el, '(___) ___-____', [
      'separator', '\\d', '\\d', '\\d', 'separator',
      'separator', '\\d', '\\d', '\\d', 'separator',
      '\\d', '\\d', '\\d', '\\d']);
  }

  @HostListener('keydown', ['$event']) onKeydown(e) {   
    if (this.maskHelper.updateCharacter(e)){
      this.ngModelChange.emit(this.el.nativeElement.value);
    }

    return false;
  }

  @HostListener('focus') onFocus() {
    this.maskHelper.setCursonAtBeginning();
  }

  @HostListener('click') onClick() {  
    this.maskHelper.setCursonAtBeginning();
  }

  validate(control: AbstractControl): ValidationErrors{
    return this.phoneValidator()(control);
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      if (control.value){
        let phoneFormat = '^\\(\\d{3}\\)\\s?\\d{3}-\\d{4}$';           
        
        return (new RegExp(phoneFormat)).test(control.value)
          ? null
          : {'formatNotValid' : { value: '(000) 000-0000' }};
      }

      return null;      
    }
  }
}
