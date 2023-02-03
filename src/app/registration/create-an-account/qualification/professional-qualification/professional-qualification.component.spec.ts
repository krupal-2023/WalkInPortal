import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalQualificationComponent } from './professional-qualification.component';

describe('ProfessionalQualificationComponent', () => {
  let component: ProfessionalQualificationComponent;
  let fixture: ComponentFixture<ProfessionalQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
