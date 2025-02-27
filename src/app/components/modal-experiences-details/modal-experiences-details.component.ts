import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ExperienceModel} from "../../models/experience.model";

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
  @Input() public selectedExperiences!: ExperienceModel;
  @Output() public close = new EventEmitter<void>();

  public closeModal(): void {
    this.close.emit();
  }
}
