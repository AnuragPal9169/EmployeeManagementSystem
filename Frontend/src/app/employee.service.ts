import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url1: string = "http://localhost:8081/ems/employees/";
  url2: string = "http://localhost:8081/ems/employee/profile/";
  url3: string = "http://localhost:8081/ems/employee/";
  url4: string = "http://localhost:8081/ems/employee/del/";

  flag: number = 0;

  emp: Employee = new Employee();
  emp2: Employee = new Employee();

  constructor(private http: HttpClient, private router: Router) { }

  private refreshreq = new Subject<void>();

  get Refreshreq() {
    return this.refreshreq;
  }

  getEmps(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url1);
  }

  login(username: String, password: String, emps: Employee[]): boolean {
    for (let e of emps) {
      if (e.eusername === username && e.epassword === password) {
        this.emp = e;
        this.router.navigateByUrl("emplogin/edash");
        this.flag = 1;
      }
    }
    if (this.flag === 1) {
      this.flag = 0;
      return true;
    }
    else
      return false;
  }

  changeEmpDetails(emp: Employee) {
    this.emp2 = emp;
    return this.emp2;
  }

  profiledetails() {
    console.log(this.emp);
    return this.emp;
  }

  profiledetails2() {
    console.log(this.emp2);
    return this.emp2;
  }

  viewprofile(emp: Employee): Observable<Employee> {
    console.log(emp);
    return this.http.put<Employee>(this.url2, emp);
  }

  editdetails(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url3, emp).pipe(
      tap(() => {
        this.Refreshreq.next();
      })
    );
  }

  addEmp(emp: any): Observable<Employee> {
    return this.http.post<Employee>(this.url3, emp).pipe(
      tap(() => {
        this.Refreshreq.next();
      })
    );
  }

  delEmp(emp: Employee): Observable<Employee> {
    console.log(emp);
    return this.http.put<Employee>(this.url4, emp).pipe(
      tap(() => {
        this.Refreshreq.next();
      })
    );
  }

}
