import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictHoursComponent } from './restrict-hours.component';

describe('RestrictHoursComponent', () => {
  let component: RestrictHoursComponent;
  let fixture: ComponentFixture<RestrictHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
