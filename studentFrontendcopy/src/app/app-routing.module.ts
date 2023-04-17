import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentDetailsComponent } from './components/view-student-details/view-student-details.component';
import { StudentTableComponent } from './student-table/student-table.component';

const routes: Routes = [
  { path: 'dashboard', component: StudentListComponent, pathMatch: 'full' },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  {
    path: 'add-student',
    component: AddStudentComponent,
    pathMatch: 'full',
  },
  {
    //dynamic url
    path: 'update-student/:id',
    component: UpdateStudentComponent,
    pathMatch: 'full',
  },
  {
    path: 'view-student-details/:id',
    component: ViewStudentDetailsComponent,
    pathMatch: 'full',
  },

  {
    path: 'student-demo-table',
    component: StudentTableComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
