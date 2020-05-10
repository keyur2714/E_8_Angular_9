import { Component, OnInit } from '@angular/core';
import { Student } from '../student_list/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  selectedStudent : Student;

  studentList : Student[] = [
    new Student(27,"keyur","7387029671","keyurjava27@gmail.com"),
    new Student(44,"denish","8600712124","denish_hp@gmail.com")
  ];

  headerList : string[] = ["Id","Name","Mobile No"];
  fieldList : string[] = ["id","name","mobileNo"];

  constructor() { }

  ngOnInit() {
    this.studentList.push(new Student(26,"vinit","9879534778","vinit2cute@gmail.com"));
  }

  getRow(data) : void{
    this.selectedStudent = data;
  }
}
