import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  //Old Way to Create Object. 
 /* education = {
    year : 2001,
    degree : "S.S.C",
    uni : "GSEB",
    per : 72.14
  }; */

  educationList : Education[] = [];
  education : Education = new Education();

  constructor() { 
    console.log("Education Detail component Object Created...");
  }

  ngOnInit() {
    console.log("Education Detail component Inititlized ...");
    this.education.year = 2001;
    this.education.degree = 'S.S.E';
    this.education.uni = 'GSEB';
    this.education.per = 72.14;

    let education2 = new Education(2003,'H.S.E');
    education2.uni = 'GHSEB';
    education2.per = 66.50;

    let education3 = new Education(2007,'B-Tech','SPU');
    education3.per = 60.60;

    let education4 = new Education(2009,'M-Tech','S.P.U',65);

    this.educationList.push(this.education);
    this.educationList.push(education2);
    this.educationList.push(education3);
    this.educationList.push(education4);
  }

}
