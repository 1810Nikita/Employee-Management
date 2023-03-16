import {  Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Emp } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  
  

  public employee!: Emp[];

  
  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void{
    this.getRegisterdUser()
  }
  getRegisterdUser() {
    this.api.getRegisterdUser().subscribe(data =>{
      this.employee = data
    })
  }

  edit(empid:Number){
    this.router.navigate(['update', empid])

  }

  delete(empid:Number){
    this.api.deleteRegisteredUser(empid)
    .subscribe(res=>{
      this.getRegisterdUser


    }) 
      


    
  }






}
