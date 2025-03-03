import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {
  ProjectCardSlidesDesktopComponent
} from "../../components/project-card/project-card-slides-desktop/project-card-slides-desktop.component";
import {
  ProjectCardSlidesMobileComponent
} from "../../components/project-card/project-card-slides-mobile/project-card-slides-mobile.component";
import {isPlatformBrowser, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    ProjectCardSlidesDesktopComponent,
    ProjectCardSlidesMobileComponent,
    NgIf
  ],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss', '../base.scss']
})
export class ProjectsPageComponent {
  public isDesktop: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isDesktop = this.isPlatformBrowser() && window.innerWidth > 768;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    if (this.isPlatformBrowser()) {
      this.isDesktop = event.target.innerWidth > 768;
    }
  }

  private isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
