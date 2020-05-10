import { Component, OnInit } from '@angular/core';
import { Course } from '../course_list/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  selectedRow : Course;

  courseList : Course[]= [
    new Course(1,"Angular",13800,"Keyur"),
    new Course(2,"Python",14800,"Jatin")
  ];

  headerList : string[]= ["Course #","Course Name","Fees","Trainer Name"];
  fieldList : string[] =["id","courseName","fees","trainerName"];

  constructor() { }

  ngOnInit() {
    this.courseList.push(new Course(3,"BigData",15800,"Vaibhav"));
  }

  getRow(data) : void{
    this.selectedRow = data;
  }
}
