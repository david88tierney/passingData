import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-event-practice',
  templateUrl: './output-event-practice.component.html',
  styleUrls: ['./output-event-practice.component.css']
})
export class OutputEventPracticeComponent implements OnInit {
  @Output() employeeCreated = new EventEmitter<{fName: string, lName: string}>();
  // fName = '';
  lName = '';
  @ViewChild('viewChildInput', {static: true}) viewChildInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(fname : HTMLInputElement){
    console.log(fname.value)
    this.employeeCreated.emit({
      fName : fname.value,
      lName : this.lName
    })
  }

  testViewChild(){
    console.log(this.viewChildInput.nativeElement.value);
  }

}
