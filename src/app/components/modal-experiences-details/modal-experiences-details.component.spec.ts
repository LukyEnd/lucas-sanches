import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperiencesDetailsComponent } from './modal-experiences-details.component';

describe('ModalExperiencesDetailsComponent', () => {
  let component: ModalExperiencesDetailsComponent;
  let fixture: ComponentFixture<ModalExperiencesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExperiencesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalExperiencesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
