import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-directive-demo',
 template:`
 <h1>Hi I am an example of Components</h1>
 `,
  styleUrls: ['./component-directive-demo.component.css']
})
export class ComponentDirectiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
