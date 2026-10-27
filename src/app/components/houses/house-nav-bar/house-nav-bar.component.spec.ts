import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_TEST_IMPORTS } from '../../../testing/app-test-imports';
import { HouseNavBarComponent } from './house-nav-bar.component';

describe('HouseNavBarComponent', () => {
  let component: HouseNavBarComponent;
  let fixture: ComponentFixture<HouseNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseNavBarComponent ],
      imports: APP_TEST_IMPORTS,
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
