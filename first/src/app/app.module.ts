import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employees/employee.service';
import { AddEmployeeComponent } from './employees/addemployee.component';
import { EmployeeListComponent } from './employees/employee-list.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, AddEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
