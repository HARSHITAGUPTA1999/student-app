import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css'],
})
export class ViewStudentDetailsComponent implements OnInit {
  userId: number = 0;
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.viewStudentDetails();
  }

  viewStudentDetails() {
    this.userId = this.route.snapshot.params['id'];
    return this.studentService.getStudentById(this.userId).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
