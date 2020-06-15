import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardsComponent } from './house-cards.component';

describe('HouseCardsComponent', () => {
  let component: HouseCardsComponent;
  let fixture: ComponentFixture<HouseCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
