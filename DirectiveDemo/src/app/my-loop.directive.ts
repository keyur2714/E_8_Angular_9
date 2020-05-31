import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private viewContainerRef: ViewContainerRef,private templateRef: TemplateRef<any>) { 
    console.log("MyLoop Directive Object Created.");
  }

  @Input("appMyLoop") set loop(loopCounter : number){
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input("appMyLoopExtra") set extra(str : string){
    alert(str);
  }
}
