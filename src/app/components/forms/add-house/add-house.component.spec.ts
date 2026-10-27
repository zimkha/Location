import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { APP_TEST_IMPORTS } from '../../../testing/app-test-imports';
import { AddHouseComponent } from './add-house.component';

describe('AddHouseComponent', () => {
  let component: AddHouseComponent;
  let fixture: ComponentFixture<AddHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHouseComponent ],
      imports: APP_TEST_IMPORTS,
      providers: [ BsModalRef ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
