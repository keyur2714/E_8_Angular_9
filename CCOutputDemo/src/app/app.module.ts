import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyTableComponent } from './my-table/my-table.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyDropdownComponent,
    RegistrationComponent,
    MyTableComponent,
    StudentListComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
