import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoInputDateComponent } from './kendo-input-date.component';

describe('KendoInputDateComponent', () => {
  let component: KendoInputDateComponent;
  let fixture: ComponentFixture<KendoInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
