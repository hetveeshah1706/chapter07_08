import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  template:`
    <div [ngClass]="'classOne classTwo'">Hello</div>
    <div [ngClass]="['classOne','classTwo']">Hello</div>
    <div [ngClass]="{'classOne': true}">Hello</div>
  `,
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
