import {Component} from '@angular/core';
import {ProjectsService} from "../../../services/project.service";
import {ProjectDataModel} from "../../../models/data-project.model";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-project-card-slides-mobile',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './project-card-slides-mobile.component.html',
  styleUrl: './project-card-slides-mobile.component.scss'
})
export class ProjectCardSlidesMobileComponent {
  public projects: ProjectDataModel
  public activeIndex: number = 0;
  public isTransitioning: boolean = false;
  private touchStartX: number = 0;

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjectsPageData();
  }

  public nextSlide(): void {
    if (this.isTransitioning || this.projects.data.length === 0) return;
    this.isTransitioning = true;
    this.activeIndex = (this.activeIndex + 1) % this.projects.data.length;
    setTimeout(() => (this.isTransitioning = false), 400);
  }

  public prevSlide(): void {
    if (this.isTransitioning || this.projects.data.length === 0) return;
    this.isTransitioning = true;
    this.activeIndex = (this.activeIndex - 1 + this.projects.data.length) % this.projects.data.length;
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
