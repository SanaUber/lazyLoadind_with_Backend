import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpCompComponent } from './new-emp-comp.component';

describe('NewEmpCompComponent', () => {
  let component: NewEmpCompComponent;
  let fixture: ComponentFixture<NewEmpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEmpCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
