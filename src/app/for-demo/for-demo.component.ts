import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  template: `
    <h2>Welcome</h2>
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `,
  styleUrls: ['./for-demo.component.css'],
})
export class ForDemoComponent implements OnInit {
  public items=['Apple','kiwi','Mango','Banana','Orange'];
  constructor() {}

  ngOnInit(): void {}
}
