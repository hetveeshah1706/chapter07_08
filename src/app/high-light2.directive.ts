import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight2]'
})
export class HighLight2Directive {

  @Input() defaultColor: string = 'red';
  backgroundColor: string = '';
  constructor() {}

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }
  @HostBinding('style.background-color') get setColor() {
    return this.backgroundColor;
  }

}
