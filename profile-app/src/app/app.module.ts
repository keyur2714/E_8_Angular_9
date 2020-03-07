import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EducationDetailComponent } from './education-detail/education-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    StudentListComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
