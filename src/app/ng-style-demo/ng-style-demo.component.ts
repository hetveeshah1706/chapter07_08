import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
 template:`
 <p [ngStyle]="{'color': 'green','font-size':'20px'}">My Sample Text</p>
 `,
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
