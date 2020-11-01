import { Component, OnInit, ViewChild } from '@angular/core';
import { TestServiceService } from 'src/app/services/test-service.service';
import { Employee } from './../../models/data.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private service: TestServiceService ) { }

  ngOnInit(): void {
    this.showEmployees();
  }

  showEmployees() {
    this.service.getEmployees()
      .subscribe( (resp: any) => {
        this.employees = resp.data.employees;
        console.log(this.employees);
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  show(tr) {
    this.ngOnInit();
  }

}
