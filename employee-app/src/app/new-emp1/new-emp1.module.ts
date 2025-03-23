import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmp1RoutingModule } from './new-emp1-routing.module';
import { NewEmp1Component } from './new-emp1.component';


@NgModule({
  declarations: [
    NewEmp1Component
  ],
  imports: [
    CommonModule,
    NewEmp1RoutingModule
  ]
})
export class NewEmp1Module { }
