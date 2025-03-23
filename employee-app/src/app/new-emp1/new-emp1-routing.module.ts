import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEmp1Component } from './new-emp1.component';

const routes: Routes = [{ path: '', component: NewEmp1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewEmp1RoutingModule { }
