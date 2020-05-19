import { Component } from '@angular/core';

@Component({
    selector : 'app-num-util',
    template : 'Result Is : <ng-content></ng-content>',
    styles : []
})
export class NumberUtilComponent{

    constructor(){
        console.log("Number Util Component Object Created...!");
    }

    add(no1 : number,no2 : number):number{
        return no1 + no2;
    }

    mul(no1 : number,no2 : number):number{
        return no1 * no2;
    }

    div(no1 : number,no2 : number):number{
        if(no2 === 0){
            return 0;
        }
        return no1 / no2;
    }

    sub(no1 : number,no2 : number):number{
        return no1 - no2;
    }
}