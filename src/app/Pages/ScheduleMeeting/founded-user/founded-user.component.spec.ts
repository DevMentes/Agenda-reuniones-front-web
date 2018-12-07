import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundedUserComponent } from './founded-user.component';

describe('FoundedUserComponent', () => {
  let component: FoundedUserComponent;
  let fixture: ComponentFixture<FoundedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
