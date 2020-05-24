import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector : '[app-basic]'
})
export class BasicStyle implements AfterViewInit{
    constructor(private elementRef : ElementRef){        
        console.log("Basic Directive Object Created...!");
    }


    ngAfterViewInit(){
        console.log(this.elementRef);
        let originalValue : string = this.elementRef.nativeElement.innerHTML;
        this.elementRef.nativeElement.innerHTML = originalValue.toUpperCase();
        this.elementRef.nativeElement.style.fontSize='35px';
        this.elementRef.nativeElement.style.background='yellow';
    }

    changeStyle(element : ElementRef,color : string,fontSize):void{
        element.nativeElement.style.color = color;
        element.nativeElement.style.fontSize = fontSize;
    }

}