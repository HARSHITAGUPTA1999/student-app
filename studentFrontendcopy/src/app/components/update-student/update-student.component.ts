import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  userId: number = 0;
  student: Student = new Student();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  firstNameFormControl = new FormControl('', [Validators.required]);

  lastNameFormControl = new FormControl('', [Validators.required]);

  genderFormControl = new FormControl('', [Validators.required]);

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSingleStudentDetails();
  }

  onSubmit() {
    console.log('details updated');
    this.updateStudentDetails();
  }

  getSingleStudentDetails() {
    //get user id from url using route.snapshot.params
    this.userId = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.userId).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => console.log(error)
    );
  }

  updateStudentDetails() {
    return this.studentService
      .updateStudent(this.userId, this.student)
      .subscribe((data) => {
        console.log('student updated successfully');
        this.router.navigate(['/dashboard']);
      });
  }
}
