import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: IEmployee[] = []; // Array<string>
  // emp: IEmployee;

  constructor(
    private employeeService: EmployeeService,
    private _router: Router
  ) {}

  // editUserContact(usercontact: UserContact) {
  //   console.log(usercontact);
  //   localStorage.removeItem('editUserId');
  //   localStorage.setItem('editUserId', usercontact.id.toString());
  //   this.router.navigate(['edit']);
  //   // this.ucs.update(usercontact);
  // }

  // deleteUserContact(usercontact: UserContact) {
  //   console.log(usercontact);
  //   this.ucs.delete(usercontact);
  // }

  ngOnInit() {
    this.employees = this.employeeService.getall();
    console.log(this.employees);
  }

  onClick(): void {
    this._router.navigate(['/addemployee']);
  }
}
