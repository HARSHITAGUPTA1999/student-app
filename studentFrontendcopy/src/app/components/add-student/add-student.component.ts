import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  firstNameFormControl = new FormControl('', [Validators.required]);

  lastNameFormControl = new FormControl('', [Validators.required]);

  genderFormControl = new FormControl('', [Validators.required]);

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {}

  addStudent() {
    if (
      this.emailFormControl.valid &&
      this.firstNameFormControl.valid &&
      this.lastNameFormControl.valid
    ) {
      this.studentService.createStudent(this.student).subscribe(
        (data) => {
          console.log('student created');
          console.log(data);
          this.redirectToDashboard();
        },
        (error) => console.log(error)
      );
    }
  }

  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    console.log('data from form');
    console.log(this.student);
    this.addStudent();
  }
}
