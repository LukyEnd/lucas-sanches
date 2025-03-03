import {AboutService} from "../../services/about.service";
import {Component} from "@angular/core";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DataAboutPageModel} from "../../models/data-about-page.model";
import {TrainingPageComponent} from "../training-page/training-page.component";
import {
  ProfessionalExperiencesPageComponent
} from "../professional-experiences-page/professional-experiences-page.component";
import {FullpageService} from "../../services/fullpage.service";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TrainingPageComponent,
    ProfessionalExperiencesPageComponent,
    NgForOf,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss', './../base.scss']
})
export class AboutPageComponent {
  public aboutPage: DataAboutPageModel;

  constructor(
    private aboutPageService: AboutService,
    private fullPageService: FullpageService,
  ) {
    this.aboutPage = this.aboutPageService.getAboutPageData();
  }

  public goToPersonalDevelopment() {
    this.fullPageService.moveToSection('about/1');
  }

  public goToProfessionalExperience() {
    this.fullPageService.moveToSection('about/2');
  }
}
