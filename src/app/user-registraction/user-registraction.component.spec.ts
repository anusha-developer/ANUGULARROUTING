import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistractionComponent } from './user-registraction.component';

describe('UserRegistractionComponent', () => {
  let component: UserRegistractionComponent;
  let fixture: ComponentFixture<UserRegistractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
