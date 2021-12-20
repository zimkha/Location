import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListItemsComponent } from './house-list-items.component';

describe('HouseListItemsComponent', () => {
  let component: HouseListItemsComponent;
  let fixture: ComponentFixture<HouseListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
