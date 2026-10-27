import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_TEST_IMPORTS } from '../../testing/app-test-imports';
import { ListApartmentComponent } from './list-apartment.component';

describe('ListApartmentComponent', () => {
  let component: ListApartmentComponent;
  let fixture: ComponentFixture<ListApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApartmentComponent ],
      imports: APP_TEST_IMPORTS,
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
