import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityVerifierComponent } from './availability-verifier.component';

describe('AvailabilityVerifierComponent', () => {
  let component: AvailabilityVerifierComponent;
  let fixture: ComponentFixture<AvailabilityVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
