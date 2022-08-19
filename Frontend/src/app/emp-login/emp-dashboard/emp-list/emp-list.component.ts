import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, share } from 'rxjs';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private service: EmployeeService, private router: Router) { }

  emps: Employee[];

  ngOnInit(): void {
    this.getAll();
    this.service.Refreshreq.subscribe(x => {
      this.getAll();
    });
  }

  getAll() {
    this.service.getEmps().subscribe(x => this.emps = x);
  }

  editEmpDetails(emp: Employee) {
    console.log(emp);
    this.service.changeEmpDetails(emp);
    this.router.navigateByUrl("emplogin/edash/emplist/editdetails");
  }

  delEmpDetails(emp: Employee) {
    console.log(emp);
    this.service.delEmp(emp).subscribe();
    this.router.navigateByUrl("emplogin/edash/emplist");
  }

}
