import { Component } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-demo';

  subscription : Subscription;
  numberObservable : Observable<number> = interval(1000);

  observable = new Observable(subscriber => {
    subscriber.next("Tea");
    subscriber.next("Coffee");
    subscriber.next("GTea");
    setTimeout(() => {
      subscriber.next(123);
      subscriber.complete();
    }, 1000);
  });

  startSubsribe() : void {
    console.log('just before subscribe');
    this.observable.subscribe({
      next(x) { 
        console.log('got value ' + x); 
      },
      error(err) { 
        console.error('something wrong occurred: ' + err); 
      },
      complete() {
         console.log('done'); 
      }
    });
    console.log('just after subscribe');
  }

  start() : void {
    this.subscription = this.numberObservable.subscribe(
      (data)=>{
        console.log("Data :  "+data);
      },
      (error)=>{
        console.log("error");
      },
      ()=>{
        console.log("Conplete");
      }
    )
  }

  stop() : void{
    this.subscription.unsubscribe();
  }

}
