import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './employees/addemployee/addemployee.component';
import { EditEmployeeComponent } from './employees/editemployee/editemployee.component';
import { EmployeeListComponent } from './employees/listemployee/employee-list.component';

const routes: Routes = [
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'editemployee/:id', component: EditEmployeeComponent },
  { path: 'home', component: EmployeeListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
