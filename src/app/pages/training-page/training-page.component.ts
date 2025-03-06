import {Component} from '@angular/core';
import {AboutService} from "../../services/about.service";
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {ExperienceModel} from "../../models/experience.model";
import {RandomTextsService} from "../../services/random-texts.service";
import {RandomTextModel} from "../../models/data-random-text.model";

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
  public randomText!:RandomTextModel ;

  constructor(
    private aboutService: AboutService,
    private randomService: RandomTextsService
    ) {
    this.aboutService.getTrainingPageData().subscribe((dataExperience: ExperienceModel) => {
      this.trainingData = dataExperience;
    });
    this.randomService.getRandomText().subscribe((dataRandom: RandomTextModel) => {
        this.randomText = dataRandom;
    });
  }
}
