import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { Observable, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }


  getPrsonList() : Observable<Person[]> {
    let person1 : Person = new Person(1,"keyur","surat");
    let person2 : Person = new Person(2,"denish","mumbai");
    let person3 : Person = new Person(3,"vinit","surat");
    let person4 : Person = new Person(4,"rupesh","valsad");
    return of([person1,person2,person3,person4]);
  }

  getRollNumbers() : Observable<number>{
    return of(27,32,44,26,4,55,54,28).pipe(
      filter(rollNo=>rollNo === 44 || rollNo === 54 ? false : true),
      map(rollNo=>{
        return rollNo*2
      })
    );
  }

  getPersonNames() : Observable<string[]> {
    return this.getPrsonList().pipe(
      map(persons=>{ 
        let names : string[] = [];
        for(let p of persons){
          names.push(p.name.toUpperCase());
        }
        return names;
      })      
    );
  }


}
