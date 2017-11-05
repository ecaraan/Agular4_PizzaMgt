import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[fieldLabel]'
})
export class FieldLabelDirective implements AfterViewInit {

  @Input() fieldLabel: string = '';

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    this.el.nativeElement.innerText = this.fieldLabel;
  }

}
