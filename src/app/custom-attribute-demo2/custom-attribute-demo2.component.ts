import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-attribute-demo2',
 template:`<h1 appHighLight2 [defaultColor]="'blue'"> Some Text </h1>`,
  styleUrls: ['./custom-attribute-demo2.component.css']
})
export class CustomAttributeDemo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
