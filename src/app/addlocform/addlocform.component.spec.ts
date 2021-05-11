import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlocformComponent } from './addlocform.component';

describe('AddlocformComponent', () => {
  let component: AddlocformComponent;
  let fixture: ComponentFixture<AddlocformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlocformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlocformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
