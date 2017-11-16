import { Directive, ElementRef, HostListener, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { MaskHelper } from '../helpers/mask-helper';

@Directive({
  selector: 'input[type="text"].phone',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneDirective,
    multi: true
  }]
})

export class PhoneDirective implements Validator, AfterViewInit {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);

  private maskHelper: MaskHelper;
  private mask: string = '(___) ___-____';
  private characterValidators: string[] = [
    'separator', '\\d', '\\d', '\\d', 'separator',
    'separator', '\\d', '\\d', '\\d', 'separator',
    '\\d', '\\d', '\\d', '\\d'];
  
  constructor(private el: ElementRef) {
    this.maskHelper = new MaskHelper(el, this.mask, this.characterValidators);
  }

  ngAfterViewInit(){    
    this.ngModelChange.emit(this.mask);
  }

  @HostListener('keydown', ['$event']) onKeydown(e) { 
    if (e.keyCode != 9){ // tab char
      if (this.maskHelper.updateCharacter(e)){
        this.ngModelChange.emit(this.el.nativeElement.value);
      }

      return false;
    }
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
