import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentNavbarComponent } from './apartment-navbar.component';

describe('ApartmentNavbarComponent', () => {
  let component: ApartmentNavbarComponent;
  let fixture: ComponentFixture<ApartmentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
