import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { House } from 'src/app/models/house.model';
import { HousestateEnum } from 'src/app/ngRx/house/house.reducer';
import { APP_TEST_IMPORTS } from '../../../testing/app-test-imports';
import { HouseListItemsComponent } from './house-list-items.component';

// The first two houses in db.json, the json-server data the app is developed against.
const HOUSES: House[] = [
  { id: 2, code: 'H002', city: 'Guédiawaye', nb_etage: 2, nb_pieces: 10, nb_sdb: 3, nb_total_chambre: 3, rent_per_room: true, garage: true, price_location: 2500000, pool: true, createdAt: '2021:12:12', updatedAt: '2021:12:12' },
  { id: 3, code: 'H003', city: 'Parcelles', nb_etage: 2, nb_pieces: 10, nb_sdb: 3, nb_total_chambre: 3, rent_per_room: true, garage: true, price_location: 2500000, pool: true, createdAt: '2021:12:12', updatedAt: '2021:12:12' }
];

describe('HouseListItemsComponent', () => {
  let component: HouseListItemsComponent;
  let fixture: ComponentFixture<HouseListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseListItemsComponent ],
      imports: APP_TEST_IMPORTS,
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseListItemsComponent);
    component = fixture.componentInstance;
    // HousesComponent renders this list only once the store is LOADED and always binds [state] then; ngOnInit reads state.houses, so the component cannot start without it.
    component.state = { houses: HOUSES, errorMessage: '', dataState: HousestateEnum.LOADED, currentHouse: null, data: null };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one row per house, in order, with its code and city', () => {
    const rows = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr'));
    expect(rows.map((row) => [row.children[1].textContent?.trim(), row.children[2].textContent?.trim()])).toEqual([
      ['H002', 'Guédiawaye'],
      ['H003', 'Parcelles']
    ]);
    expect(component.totalRecord).toBe(2);
  });
});
