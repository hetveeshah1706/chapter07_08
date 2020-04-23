import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(elem: ElementRef, renderer:Renderer2 ) {
    renderer.setStyle(elem.nativeElement,'background-color','yellow');
  }

}
