import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../periodicelement';
import { Column } from '../column';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  // @Input()
  // tableColumns: Array<Column> = [];

  // @Input()
  // tableData: Array<any> = [];

  // displayedColumns: Array<string> = [];

  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];

  dataSource!: MatTableDataSource<any>;

  //contains all the items that are selected
  selectedItems = new SelectionModel<PeriodicElement>(true, []);

  //! used to tell that the variable gets its value during runtime
  @ViewChild('pagination') myPaginator!: MatPaginator;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  //new column - static to be added
  // newColumn = 'select';

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // this.displayedColumns = this.tableColumns
    //   .map((c) => c.columnDef)
    //   .concat(['select']);
    // this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.myPaginator; // For pagination
  }

  close() {
    this.sidenav.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  onSelection(data: PeriodicElement) {
    console.log(data);
    this.selectedItems.toggle(data);
    console.log(this.selectedItems.selected);
    //  console.log('selected items', this.selectedItems.selected);
    console.log('hello');
  }

  isAllSelected() {
    if (this.selectedItems.selected.length === this.dataSource.data.length) {
      //means all rows are selected , so all are checked -> return true
      return true;
    } else {
      return false;
    }
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selectedItems.clear();
      console.log('selected rows', this.selectedItems.selected);
      return;
    }

    this.selectedItems.select(...this.dataSource.data);
    console.log('selected rows', this.selectedItems.selected);
  }
}
