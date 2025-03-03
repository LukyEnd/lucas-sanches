import {Component} from '@angular/core';
import {ProjectsService} from "../../../services/project.service";
import {ProjectModel} from "../../../models/data-project.model";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-project-card-slides-mobile',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './project-card-slides-mobile.component.html',
  styleUrl: './project-card-slides-mobile.component.scss'
})
export class ProjectCardSlidesMobileComponent {
  public projects: ProjectModel[] = [];
  public activeIndex: number = 0;
  public isTransitioning: boolean = false;
  private touchStartX: number = 0;

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjectsPageData() || [];
  }

  public nextSlide(): void {
    if (this.isTransitioning || this.projects.length === 0) return;
    this.isTransitioning = true;
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
    setTimeout(() => (this.isTransitioning = false), 400);
  }

  public prevSlide(): void {
    if (this.isTransitioning || this.projects.length === 0) return;
    this.isTransitioning = true;
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
    setTimeout(() => (this.isTransitioning = false), 400);
  }

  public onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  public onTouchEnd(event: TouchEvent): void {
    const swipeDistance: number = this.touchStartX - event.changedTouches[0].clientX;

    if (Math.abs(swipeDistance) > 50) {
      swipeDistance > 0 ? this.nextSlide() : this.prevSlide();
    }
  }
}
