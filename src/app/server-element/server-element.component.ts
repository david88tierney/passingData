import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // Input will receive data from a parent component through '[element]="...."' keyword element which matches Input()
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
