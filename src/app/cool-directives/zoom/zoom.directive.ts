import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {
  @Input() zoom: number;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  mouseEnter() {
    console.log('zooming', this.zoom);
    this.renderer.setStyle(this.element.nativeElement, 'transition', `transform 0.3s ease-in-out`)
    this.renderer.setStyle(this.element.nativeElement, 'transform', `scale(${this.zoom || 1.2}`)
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'transition')
    this.renderer.removeStyle(this.element.nativeElement, 'transform');
  }
}
