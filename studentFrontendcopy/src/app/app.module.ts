import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentDetailsComponent } from './components/view-student-details/view-student-details.component';

import { ButtonComponent } from './common/button/button.component';
import { MaterialModule } from './material/material.module';
import { StudentTableComponent } from './student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ViewStudentDetailsComponent,
    ButtonComponent,
    StudentTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
