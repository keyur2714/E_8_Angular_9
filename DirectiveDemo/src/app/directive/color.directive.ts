import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit{

  @Input() color : string = 'red';
  @Input("bgColor") background : string = 'black';

  constructor(private elementRef : ElementRef) { }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.background;
  }

}
