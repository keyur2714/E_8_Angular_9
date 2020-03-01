import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentNames : string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
    this.studentNames.push("sachin");
    this.studentNames.push("piyush");
    this.studentNames.push("mukti");
  }

}
