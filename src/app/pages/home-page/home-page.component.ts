import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FullPageService} from "../../services/full-page.service";
import {HomePageModel} from "../../models/data-home-page.model";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', './../base.scss']
})
export class HomePageComponent {
  public homePageData: HomePageModel;
  public isOpen: boolean = false;

  constructor(
    private fullPageService: FullPageService,
    private homePageService: HomeService
  ) {
    this.homePageData = this.homePageService.getHomePageData();
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.fullPageService.moveToSection('about');
  }
}
