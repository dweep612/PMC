import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = [];
  errorMessage: string = '';

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  onClick(): void {
    this._router.navigate(['/addemployee']);
  }
}
