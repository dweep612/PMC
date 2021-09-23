import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employees/employee.service';
import { AddEmployeeComponent } from './employees/addemployee/addemployee.component';
import { EmployeeListComponent } from './employees/listemployee/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employees/editemployee/editemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
