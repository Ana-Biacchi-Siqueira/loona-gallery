import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[loonaPicDarkenOnHover]'
})
export class DarkenOnHoverDirective{

  @Input() brightness = '80%';

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
