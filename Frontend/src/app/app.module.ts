import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpDashboardComponent } from './emp-login/emp-dashboard/emp-dashboard.component';
import { EmpProfileComponent } from './emp-login/emp-dashboard/emp-profile/emp-profile.component';
import { EmpListComponent } from './emp-login/emp-dashboard/emp-list/emp-list.component';
import { LogoutComponent } from './emp-login/emp-dashboard/logout/logout.component';
import { AddEmpComponent } from './emp-login/emp-dashboard/emp-list/add-emp/add-emp.component';
import { EditDetailsComponent } from './emp-login/emp-dashboard/emp-list/edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpLoginComponent,
    EmpDashboardComponent,
    EmpProfileComponent,
    EmpListComponent,
    LogoutComponent,
    EditDetailsComponent,
    AddEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
