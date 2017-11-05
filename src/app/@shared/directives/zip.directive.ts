import { Directive, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"].zip'
})

export class ZipDirective implements AfterViewInit {
  
  @Input() zip: string = '';

  constructor(private el: ElementRef, private rgx: RegExp) { }

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  @HostListener('keydown', ['$event']) onClick(event) {
    let allowed = '^[a-zA-Z]{2}\d{2}\s\d[a-zA-Z]{2}$';
    if (!this.rgx.test(allowed)){
      event.preventDefault();
    }
  }
}
