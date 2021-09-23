import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: IEmployee[] = [
    {
      name: 'Dweep Panchal',
      mobile: 9876543217,
      email: 'dweep@gmail.com',
      department: 'Professional Service',
    },
    {
      name: 'Mary Patel',
      mobile: 9876512782,
      email: 'mary@gmail.com',
      department: 'HR',
    },
    {
      name: 'Ayush Shah',
      mobile: 8978526374,
      email: 'ayush@gmail.com',
      department: 'Managed Service',
    },
    {
      name: 'Alex Johnson',
      mobile: 8745213698,
      email: 'alex@gmail.com',
      department: 'Product Service',
    },
    {
      name: 'John Vaynerchuk',
      mobile: 7778899551,
      email: 'john@gmail.com',
      department: 'Sales & Marketing',
    },
  ];

  create(employee: IEmployee) {
    const itemIndex = this.employees.length;
    // usercontact.id = this.getnextId();
    console.log(employee);
    this.employees[itemIndex] = employee;
  }

  // delete(usercontact: UserContact) {
  //   this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
  // }

  // update(usercontact: UserContact) {
  //   const itemIndex = this.usercontacts.findIndex(
  //     (item) => item.id === usercontact.id
  //   );
  //   console.log(itemIndex);
  //   this.usercontacts[itemIndex] = usercontact;
  // }

  getall(): IEmployee[] {
    console.log(this.employees);
    return this.employees;
  }

  // reorderUserContacts(usercontact: IEmployee) {
  //   console.log('Zur Info:', usercontact);
  //   this.usercontacts = this.usercontacts
  //     .map((uc) => (uc.id === usercontact.id ? usercontact : uc))
  //     .sort((a, uc) => uc.id - uc.id);
  // }

  // getUserById(id: number) {
  //   console.log(id);
  //   const itemIndex = this.usercontacts.findIndex((item) => item.id === id);
  //   console.log(itemIndex);
  //   return this.usercontacts[itemIndex];
  // }

  // getnextId(): number {
  //   let highest = 0;
  //   this.usercontacts.forEach(function (item) {
  //     if (highest === 0) {
  //       highest = item.id;
  //     }
  //     if (highest < item.id) {
  //       highest = item.id;
  //     }
  //   });
  //   return highest + 1;
  // }
}
