import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcliComponent } from './add-edit-cli.component';

describe('AddEditCliComponent', () => {
  let component: AddEditcliComponent;
  let fixture: ComponentFixture<AddEditcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
