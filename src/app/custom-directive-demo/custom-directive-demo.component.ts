import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-demo',
  template:`
  <h2> Custom Attribute Directive <h2>
  <h4 appHighlighter> Some Text </h4>

  `,
  styleUrls: ['./custom-directive-demo.component.css']
})
export class CustomDirectiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
