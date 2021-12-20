import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseNavBarComponent } from './house-nav-bar.component';

describe('HouseNavBarComponent', () => {
  let component: HouseNavBarComponent;
  let fixture: ComponentFixture<HouseNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseNavBarComponent ]
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
