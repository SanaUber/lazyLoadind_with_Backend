import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [{ path:'', component: EmployeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EmployeeService,HttpClient]
})
export class EmployeeRoutingModule { }
