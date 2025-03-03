import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardSlidesMobileComponent } from './project-card-slides-mobile.component';

describe('ProjectCardSlidesMobileComponent', () => {
  let component: ProjectCardSlidesMobileComponent;
  let fixture: ComponentFixture<ProjectCardSlidesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardSlidesMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCardSlidesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
