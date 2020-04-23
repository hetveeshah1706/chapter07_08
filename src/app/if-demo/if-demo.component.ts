import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  template:`
    <h2>Welcome</h2>
    <p *ngIf="show">Show</p>
  `,
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent implements OnInit {
  public show=true;
  constructor() { }

  ngOnInit(): void {
  }

}
