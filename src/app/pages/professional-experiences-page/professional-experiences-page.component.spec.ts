import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperiencesPageComponent } from './professional-experiences-page.component';

describe('ProfessionalExperiencesPageComponent', () => {
  let component: ProfessionalExperiencesPageComponent;
  let fixture: ComponentFixture<ProfessionalExperiencesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperiencesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalExperiencesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
