import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
  private _employeeUrl = '../assets/employees.json';

  constructor(private _http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this._employeeUrl).pipe(
      //   tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('EmployeeService: ' + err.message);
    return Observable.throw(err.message);
  }
}
