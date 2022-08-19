import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: EmployeeService, private router: Router) { }

  addForm: FormGroup;
  employee: Employee = new Employee();
  submitted: boolean = false;

  emp: Employee[];

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      ename: ['', Validators.required],
      eage: ['', Validators.required],
      estate: ['', Validators.required],
      eusername: ['', Validators.required],
      epassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=_!]).{8,}')]],
      eemail: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$')]]
    })
  }

  get f() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.addForm.invalid)
      return;
    else {
      this.service.addEmp(this.employee).subscribe();
      this.router.navigateByUrl("emplogin/edash/emplist");
    }
  }
  getf() {
    return this.addForm.controls;
  }

}
