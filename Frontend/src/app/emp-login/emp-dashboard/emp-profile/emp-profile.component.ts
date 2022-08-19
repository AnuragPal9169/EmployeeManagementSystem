import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  emp: Employee = new Employee();
  e: any;

  ngOnInit(): void {
    this.e = this.service.profiledetails();
    this.service.viewprofile(this.e).subscribe(x => this.emp = x);
  }

}
