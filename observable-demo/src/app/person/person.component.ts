import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personList : Person[] = [];

  personCapitalNames : string[] = [];

  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.personService.getPrsonList().subscribe(
      (personList)=>{
        this.personList = personList;
      }
    )
    this.personService.getPersonNames().subscribe(
      (names)=>{
        this.personCapitalNames = names;
      }
    )

    this.personService.getRollNumbers().subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
