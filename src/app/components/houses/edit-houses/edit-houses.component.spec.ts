import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHousesComponent } from './edit-houses.component';

describe('EditHousesComponent', () => {
  let component: EditHousesComponent;
  let fixture: ComponentFixture<EditHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
