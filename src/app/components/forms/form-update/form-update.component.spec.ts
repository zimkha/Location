import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { APP_TEST_IMPORTS } from '../../../testing/app-test-imports';
import { FormUpdateComponent } from './form-update.component';

describe('FormUpdateComponent', () => {
  let component: FormUpdateComponent;
  let fixture: ComponentFixture<FormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateComponent ],
      imports: APP_TEST_IMPORTS,
      providers: [ BsModalRef ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
