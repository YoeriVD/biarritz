import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements AfterContentInit {
  constructor(private el: ElementRef) {
    
  }
  ngAfterContentInit(): void {
    const el: HTMLElement = this.el.nativeElement;
    el.focus();
  }
}
