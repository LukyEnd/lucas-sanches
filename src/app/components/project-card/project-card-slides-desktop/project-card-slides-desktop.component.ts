import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {ProjectDataModel} from "../../../models/data-project.model";
import {ProjectsService} from "../../../services/project.service";

@Component({
  selector: 'app-project-card-slides-desktop',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './project-card-slides-desktop.component.html',
  styleUrl: './project-card-slides-desktop.component.scss'
})
export class ProjectCardSlidesDesktopComponent {
  public projects!: ProjectDataModel;
  public currentIndex: number = 0;

  constructor(private projectsService: ProjectsService) {
    this.projectsService.getProjectsPageData().subscribe((dataProject: ProjectDataModel) => {
      this.projects = dataProject;
    })
  }

  public get prevIndex(): number {
    return this.currentIndex === 0 ? this.projects.data.length - 1 : this.currentIndex - 1;
  }

  public get nextIndex(): number {
    return (this.currentIndex + 1) % this.projects.data.length;
  }

  public nextSlide(): void {
    this.currentIndex = this.nextIndex;
    this.updateZIndex('next');
  }

  public prevSlide(): void {
    this.currentIndex = this.prevIndex;
    this.updateZIndex('prev');
  }

  private updateZIndex(direction: 'next' | 'prev'): void {
    if (typeof document === 'undefined') return;
    this.projects.data.forEach((_, index) => {
      const element = document.querySelector(`.project-item[data-index="${index}"]`) as HTMLElement;

      if (index === this.currentIndex) {
        element.style.zIndex = '3';
      } else if (index === this.prevIndex) {
        element.style.zIndex = direction === 'next' ? '2' : '1';
      } else if (index === this.nextIndex) {
        element.style.zIndex = direction === 'next' ? '1' : '2';
      } else {
        element.style.zIndex = '0';
      }
    });
  }
}
