import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: EmployeeService) { }

  loginForm: FormGroup;

  employee: Employee = new Employee();
  a: boolean;
  emp: Employee[];
  submitted: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      eusername: ['', Validators.required],
      epassword: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid)
      return;
    else {
      this.service.getEmps().subscribe(x => this.emp = x);
      this.a = this.service.login(this.employee.eusername, this.employee.epassword, this.emp);
      if(this.a === false)
      {
        alert("Invalid credentials, please try again!");
      }
    }
  }
  getf() {
    return this.loginForm.controls;
  }

}
