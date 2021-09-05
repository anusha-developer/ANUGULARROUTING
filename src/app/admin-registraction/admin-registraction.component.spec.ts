import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistractionComponent } from './admin-registraction.component';

describe('AdminRegistractionComponent', () => {
  let component: AdminRegistractionComponent;
  let fixture: ComponentFixture<AdminRegistractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
