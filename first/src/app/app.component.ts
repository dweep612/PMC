import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employees/employee';
import { EmployeeService } from './employees/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: IEmployee[] = [];
  errorMessage: string = '';

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
}
