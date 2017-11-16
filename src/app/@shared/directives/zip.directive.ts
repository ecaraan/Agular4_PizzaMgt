import { Directive, ElementRef, HostListener, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors, NgControl } from '@angular/forms';
import { MaskHelper } from '../helpers/mask-helper';

@Directive({
  selector: 'input[type="text"].zip',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ZipDirective,
    multi: true
  }]
})

export class ZipDirective implements Validator, AfterViewInit {
  
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  
  private maskHelper: MaskHelper;
  private mask: string = '____ ___';
  private characterValidators: string[] = [
    '[a-zA-Z]', '[a-zA-Z]', '\\d', '\\d', 'separator',
    '\\d', '[a-zA-Z]', '[a-zA-Z]'];
  
  constructor(private el: ElementRef) {
    this.maskHelper = new MaskHelper(el, this.mask, this.characterValidators, true);
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
