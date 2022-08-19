import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-login/emp-dashboard/emp-dashboard.component';
import { AddEmpComponent } from './emp-login/emp-dashboard/emp-list/add-emp/add-emp.component';
import { EditDetailsComponent } from './emp-login/emp-dashboard/emp-list/edit-details/edit-details.component';
import { EmpListComponent } from './emp-login/emp-dashboard/emp-list/emp-list.component';
import { EmpProfileComponent } from './emp-login/emp-dashboard/emp-profile/emp-profile.component';
import { LogoutComponent } from './emp-login/emp-dashboard/logout/logout.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';

const routes: Routes = [
  {"path":"emplogin",component:EmpLoginComponent},
  {"path":"emplogin/edash",component:EmpDashboardComponent},
  {"path":"emplogin/edash/empprofile",component:EmpProfileComponent},
  {"path":"emplogin/edash/emplist",component:EmpListComponent},
  {"path":"emplogin/edash/emplist/addemp",component:AddEmpComponent},
  {"path":"emplogin/edash/emplist/editdetails",component:EditDetailsComponent},
  {"path":"emplogin/edash/logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
