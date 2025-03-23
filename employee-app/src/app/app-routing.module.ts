import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = 
[{ path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
   { path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
   {path:"",component:DashboardComponent},
   { path: 'designation', loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule) },
{ path: 'newEmp', loadChildren: () => import('./new-emp/new-emp.module').then(m => m.NewEmpModule) },
{ path: 'newEmp', loadChildren: () => import('./new-emp1/new-emp1.module').then(m => m.NewEmp1Module) },
{ path: 'newEmp1', loadChildren: () => import('./new-emp1/new-emp1.module').then(m => m.NewEmp1Module) }]; // Ensure this exists

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule  ]
  
})
export class AppRoutingModule { }
