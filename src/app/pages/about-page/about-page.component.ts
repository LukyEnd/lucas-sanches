import {AboutService} from "../../services/about.service";
import {Component, HostListener, Inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {DataAboutPageModel} from "../../models/data-about-page.model";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    MatButton,
    NgIf
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss', './../base.scss']
})
export class AboutPageComponent {
  public aboutPage: DataAboutPageModel;
  public isMobile: boolean = false;
  public isOpen: boolean = false;

  constructor(
    private aboutPageService: AboutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.aboutPage = this.aboutPageService.getAboutPageData();
    this.checkMobile();
  }

  @HostListener('window:resize', [])
  checkMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 400;
    }
  }
}
