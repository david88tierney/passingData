import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  // Input with Alias instead of passing direct name
  @Input('alias') elem: {fName: string, lName: string}
  constructor() { }

  ngOnInit(): void {
  }

}
