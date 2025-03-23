import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmp1Component } from './new-emp1.component';

describe('NewEmp1Component', () => {
  let component: NewEmp1Component;
  let fixture: ComponentFixture<NewEmp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewEmp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
