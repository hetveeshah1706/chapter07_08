import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDemo2Component } from './custom-attribute-demo2.component';

describe('CustomAttributeDemo2Component', () => {
  let component: CustomAttributeDemo2Component;
  let fixture: ComponentFixture<CustomAttributeDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttributeDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
