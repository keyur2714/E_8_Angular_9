import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  constructor(){
    console.log("MaskPipe Object Created...!");
  }

  transform(value: string, maskChar : string,numberOfMaskChar : number): any {
    
    if(maskChar === undefined){
      maskChar = '#';
    }
    if(numberOfMaskChar === undefined){
      numberOfMaskChar = 4;
    }
    console.log(value +" "+maskChar +" "+numberOfMaskChar);

    let noOfMaskChar = value.length - numberOfMaskChar;
    let newValue = "";    
    for(let i=1;i<=noOfMaskChar;i++){
      newValue = newValue + maskChar;
    }
    newValue = newValue + value.substring(noOfMaskChar);

    return newValue;
  }

}
