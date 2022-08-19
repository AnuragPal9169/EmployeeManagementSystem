import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private service: EmployeeService, private router: Router) { }

  editForm: FormGroup;
  employee: Employee = new Employee();
  submitted: boolean = false;

  emp: Employee = new Employee();
  e: any;

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({
      eid: [{ value: '', disabled: true }],
      ename: new FormControl('', Validators.required),
      eage: new FormControl('', Validators.required),
      estate: new FormControl('', Validators.required),
      eusername: new FormControl('', Validators.required),
      epassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=_!]).{8,}')]),
      eemail: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$')])
    });

    this.e = this.service.profiledetails2();
    this.service.viewprofile(this.e).subscribe(x => {
      this.emp = x;
      console.log(this.emp);
      this.editForm.patchValue({
        eid: this.emp.eid,
        ename: this.emp.ename,
        eage: this.emp.eage,
        estate: this.emp.estate,
        eusername: this.emp.eusername,
        epassword: this.emp.epassword,
        eemail: this.emp.eemail
      })
    });

  }

  get f() {
    return this.editForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }
    else {
      console.log(this.employee);
      this.service.editdetails(this.employee).subscribe();
      this.router.navigateByUrl("emplogin/edash/emplist");
    }

  }
  getf() {
    return this.editForm.controls;
  }

}
