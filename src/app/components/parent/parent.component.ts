import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  elem = [
    {
      fName: 'David',
      lName: 'Tierney'
    }, 
    {
      fName: 'Giovana', 
      lName: 'Bonilla'
    }
  ];


  ngOnInit(): void {
  }

  onAddEmployee(employeeData: {fName: string, lName: string}){
    this.elem.push({
      fName: employeeData.fName,
      lName: employeeData.lName
    })
  }

}
