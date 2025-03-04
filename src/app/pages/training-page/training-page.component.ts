import {Component} from '@angular/core';
import {AboutService} from "../../services/about.service";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {ExperienceModel} from "../../models/experience.model";

@Component({
  selector: 'app-training-page',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './training-page.component.html',
  styleUrl: './training-page.component.scss'
})
export class TrainingPageComponent {
  public trainingData!: ExperienceModel;

  constructor(public aboutService: AboutService) {
    this.aboutService.getTrainingPageData().subscribe((dataExperience: ExperienceModel) => {
      this.trainingData = dataExperience;
    });
  }
}
