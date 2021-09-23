import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddEmployeeComponent {
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  addForm = this.formBuilder.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    department: ['', Validators.required],
  });

  constructor(
    private _employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {}

  onSubmit(): void {
    this._employeeService.create(this.addForm.value);
    // console.log('Employee added: ', this.addForm.value);

    this._router.navigate(['/home']);
  }
}
