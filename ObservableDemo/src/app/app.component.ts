import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map,filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'ObservableDemo';
  seqNum = 0;
  powValue = 0;
  observable :Observable<number> = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });

  subscription : Subscription = new Subscription();
  numberObservable = interval(1000);
  num2Observable : Observable<number> = interval(1000);

  ngOnInit() {
    this.observable.subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{

      },
      ()=>{
        console.log("Completed.")
      }
    )
    console.log("Doing something else");
    this.subscription = this.numberObservable.subscribe(
      (data:number)=>{
        this.seqNum = data;
      },
      (error)=>{

      }
    )
  }

  start() : void{    
    let newObs = this.num2Observable.pipe(
      filter(n=>n%2==0),      
      map(num=>{
        return num*num
      })                  
    )
    newObs.subscribe(
      (data)=>{
        this.powValue = data;
      }
    )
  }

  stop() : void{
    this.subscription.unsubscribe();
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
