import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-demo',
  template:`
  <h2>Welcome</h2>
  <ul [ngSwitch]="person">
    <li *ngSwitchCase="'Sohan'">Hello Sohan</li>
    <li *ngSwitchCase="'Mohan'">Hello Mohan</li>
    <li *ngSwitchCase="'Vijay'">Hello Vijay</li>
    <li *ngSwitchDefault>Bye Bye</li>

    </ul>

  `,
  styleUrls: ['./switch-demo.component.css']
})
export class SwitchDemoComponent implements OnInit {
public person='Mohan';
  constructor() { }

  ngOnInit(): void {
  }

}
