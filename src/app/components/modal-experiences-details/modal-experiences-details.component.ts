import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DataObjectModel} from "../../models/data-object.model";
import {RandomTextsService} from "../../services/random-texts.service";
import {RandomTextModel} from "../../models/data-random-text.model";

@Component({
  selector: 'app-modal-experiences-details',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './modal-experiences-details.component.html',
  styleUrl: './modal-experiences-details.component.scss'
})
export class ModalExperiencesDetailsComponent {
  @Input() public selectedExperiences!: DataObjectModel;
  @Output() public close = new EventEmitter<void>();
  public randomTexts!: RandomTextModel

  constructor(private randomTextsService: RandomTextsService) {
    this.randomTextsService.getRandomText().subscribe((dataRandom: RandomTextModel) => {
      this.randomTexts = dataRandom;
    });
  }

  public closeModal(): void {
    this.close.emit();
  }
}
