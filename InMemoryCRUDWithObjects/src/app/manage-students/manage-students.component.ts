import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

  studentList : Student[] = [];
  student : Student = new Student();
  isUpdate : boolean = false;

  constructor() { }

  ngOnInit() {
    let stud1 = new Student(32,"keyur","12th","7387029671");
    let stud2 = new Student(26,"denish","11th","7387029778");
    let stud3 = new Student();
    stud3.rollNo = 44;
    stud3.name = 'vinit';
    stud3.mobileNo = '8700121233';
    stud3.std = '10th';
    this.studentList.push(stud1);
    this.studentList.push(stud2);
    this.studentList.push(stud3);
  }

  update() : void {
    let stud = this.studentList.find(s=>s.rollNo==this.student.rollNo);
    let idx = this.studentList.indexOf(stud);
    this.studentList[idx] = this.student;
    this.isUpdate = false;
    this.student = new Student();
    alert("Student Updated Successfully.");
  }

  save() : void {
    // alert(this.student.rollNo);
    // alert(this.studentList);    
    let stud : Student = this.studentList.find(s=>s.rollNo==this.student.rollNo);
    //alert(stud);
    if(stud === null || stud === undefined){
      this.studentList.push(this.student);
      alert("Student Saved Successfully.");
    }else{
      alert("Student Already Exists with roll No : "+this.student.rollNo);
    }
  }

  edit(rollNo) : void {
    this.student = this.studentList.find(s=>s.rollNo==rollNo);    
    this.isUpdate = true;
  }

  delete(rollNo) : void{
    let confirmMsg = confirm("Are you sure want to delete student with "+rollNo);
    if(confirmMsg){
      let stud = this.studentList.find(s=>s.rollNo==rollNo);
      let idx = this.studentList.indexOf(stud);
      this.studentList.splice(idx,1);    
      alert("Student Deleted with RollNo "+rollNo);
    }    
  }
}
