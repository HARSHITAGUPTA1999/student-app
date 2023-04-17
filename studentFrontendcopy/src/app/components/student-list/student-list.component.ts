import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../student';
import { StudentService } from '../../student.service';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../periodicelement';
import { Column } from '../../column';
import { MatCheckbox } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  //trying for dynamic table
  // periodicTableCols: Array<Column> = [
  //   {
  //     columnDef: 'position',
  //     header: 'Position',
  //     cell: (element: Record<string, any>) => `${element['position']}`,
  //   },
  //   {
  //     columnDef: 'name',
  //     header: 'Name',
  //     cell: (element: Record<string, any>) => `${element['name']}`,
  //   },
  //   {
  //     columnDef: 'weight',
  //     header: 'Weight',
  //     cell: (element: Record<string, any>) => `${element['weight']}`,
  //   },
  //   {
  //     columnDef: 'symbol',
  //     header: 'Symbol',
  //     cell: (element: Record<string, any>) => `${element['symbol']}`,
  //   },
  // ];

  // periodicTableData: Array<PeriodicElement> = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];

  ///////////////////////////////////////////////////////////////////

  public students: Student[] = [];

  public activeStudents: Student[] = [];
  public inactiveStudents: Student[] = [];

  dataSource!: MatTableDataSource<any>;

  //decides the order in which cols displayed
  columnsToDisplay = [
    'id',
    'gender',
    'firstName',
    'lastName',
    'emailId',
    'actions',
  ];

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  setDataSource(indexNumber: number) {
    switch (indexNumber) {
      case 0:
        this.dataSource = new MatTableDataSource(this.students);
        break;
      case 1:
        this.dataSource = new MatTableDataSource(this.activeStudents);
        break;
      case 2:
        this.dataSource = new MatTableDataSource(this.inactiveStudents);
    }
  }

  private getAllStudents() {
    this.studentService.getStudentsList().subscribe((data) => {
      console.log(data);
      this.students = data;
      this.dataSource = new MatTableDataSource(this.students);

      this.students.forEach((student) => {
        if (student.gender != null) {
          this.activeStudents.push(student);
        } else {
          this.inactiveStudents.push(student);
        }
      });

      console.log('inactive students', this.inactiveStudents);
    });
  }

  updateStudent(id: number) {
    //activated route-> used for routing to another page
    this.router.navigate(['/update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe((data) => {
      console.log('student deleted successfully');
      this.getAllStudents();
    });
  }

  viewStudent(id: number) {
    this.router.navigate(['/view-student-details', id]);
  }
}
