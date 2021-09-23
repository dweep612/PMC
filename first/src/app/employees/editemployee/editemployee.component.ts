import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(
    private _employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = Number(this._route.snapshot.paramMap.get('id'));
    if (id) {
      this.getEmployee(id);
    }
  }

  addForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    department: ['', Validators.required],
  });

  getEmployee(id: number): void {
    const data = this._employeeService.getUserById(id);
    this.addForm.setValue({
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      department: data.department,
    });
  }

  // isInvalid(name: string) {
  //   const control = this.addForm.get(name);
  //   return control?.invalid && control.dirty;
  // }
  // isEmailInvalid(name: string) {
  //   const control = this.addForm.get(name);
  //   return control?.invalid && control.dirty;
  // }

  onSubmit(): void {
    console.log('AddForm: ' + this.addForm.value);
    this._employeeService.update(this.addForm.value);
    console.log('Employee updated: ', this.addForm.value);
    this._router.navigate(['/home']);
  }
}
