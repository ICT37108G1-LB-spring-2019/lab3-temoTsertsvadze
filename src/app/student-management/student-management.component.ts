import { Component, OnInit } from '@angular/core';
import {student} from './student'
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {
  Student:student[];

  constructor() { 
    this.Student = [new student("Temur","Tsertsvadze","2323233223")];
}


onClick(name:HTMLInputElement,lastName:HTMLInputElement,id:HTMLInputElement):boolean{
this.Student.push(new student(name.value,lastName.value,id.value));
return false;
  }

  ngOnInit() {
  }

}
