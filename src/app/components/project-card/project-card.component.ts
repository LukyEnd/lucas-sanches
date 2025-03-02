import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ProjectModel} from "../../models/data-project.model";
import {ProjectsService} from "../../services/project.service";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  public projects: ProjectModel[];
  public currentIndex: number = 0;

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjectsPageData();
  }

  public get prevIndex(): number {
    return this.currentIndex === 0 ? this.projects.length - 1 : this.currentIndex - 1;
  }

  public get nextIndex(): number {
    return (this.currentIndex + 1) % this.projects.length;
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
    this.projects.forEach((_, index) => {
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
