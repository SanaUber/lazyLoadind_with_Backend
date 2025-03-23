import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  implements OnInit{
  employeeList: any;
constructor( private employeeService:EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data)=>
    {
      this.employeeList=data
      console.log(' this.employeeList', this.employeeList)
    })

  }

 
}
