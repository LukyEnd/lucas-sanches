import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DataAboutPageModel} from "../../models/data-about-page.model";
import {AboutService} from "../../services/about.service";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss', './../base.scss']
})
export class AboutPageComponent {
  public aboutPage: DataAboutPageModel;

  constructor(private aboutPageService: AboutService) {
    this.aboutPage = this.aboutPageService.getAboutPageData();
  }
}
