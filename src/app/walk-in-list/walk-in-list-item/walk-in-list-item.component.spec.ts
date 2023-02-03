import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkInListItemComponent } from './walk-in-list-item.component';

describe('WalkInListItemComponent', () => {
  let component: WalkInListItemComponent;
  let fixture: ComponentFixture<WalkInListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkInListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalkInListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
