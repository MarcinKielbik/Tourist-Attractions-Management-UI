import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttraction } from './add-attraction';

describe('AddAttraction', () => {
  let component: AddAttraction;
  let fixture: ComponentFixture<AddAttraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAttraction],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAttraction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
