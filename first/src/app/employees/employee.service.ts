import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: IEmployee[] = [
    {
      id: 1,
      name: 'Dweep Panchal',
      mobile: 9876543217,
      email: 'dweep@gmail.com',
      department: 'Professional Service',
    },
    {
      id: 2,
      name: 'Mary Patel',
      mobile: 9876512782,
      email: 'mary@gmail.com',
      department: 'HR',
    },
    {
      id: 3,
      name: 'Ayush Shah',
      mobile: 8978526374,
      email: 'ayush@gmail.com',
      department: 'Managed Service',
    },
    {
      id: 4,
      name: 'Alex Johnson',
      mobile: 8745213698,
      email: 'alex@gmail.com',
      department: 'Product Service',
    },
    {
      id: 5,
      name: 'John Vaynerchuk',
      mobile: 7778899551,
      email: 'john@gmail.com',
      department: 'Sales & Marketing',
    },
  ];

  create(employee: IEmployee) {
    const itemIndex = this.employees.length;
    employee.id = this.getnextId();
    console.log(employee);
    this.employees[itemIndex] = employee;
  }

  update(employee: IEmployee) {
    const itemIndex = this.employees.findIndex(
      (item) => item.id === employee.id
    );
    console.log(itemIndex);
    this.employees[itemIndex] = employee;
  }

  getall(): IEmployee[] {
    console.log(this.employees);
    return this.employees;
  }

  getUserById(id: number) {
    console.log(id);
    const itemIndex = this.employees.findIndex((item) => item.id === id);
    console.log(itemIndex);
    return this.employees[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.employees.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
