import {Component} from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {
  ModalExperiencesDetailsComponent
} from "../../components/modal-experiences-details/modal-experiences-details.component";
import {ExperienceModel} from "../../models/experience.model";
import {AboutService} from "../../services/about.service";
import {DataObjectModel} from "../../models/data-object.model";

@Component({
  selector: 'app-professional-experiences-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ModalExperiencesDetailsComponent
  ],
  templateUrl: './professional-experiences-page.component.html',
  styleUrl: './professional-experiences-page.component.scss'
})
export class ProfessionalExperiencesPageComponent {
  public experiences!: ExperienceModel;
  public selectedExperiences!: DataObjectModel;
  public modalOpen: boolean = false;

  constructor(private serviceAbout: AboutService) {
    this.serviceAbout.getExperiencesPageData().subscribe((dataExperience: ExperienceModel) => {
      this.experiences = dataExperience;
    });
  }

  public openModal(experiences: DataObjectModel): void {
    this.selectedExperiences = experiences;
    this.modalOpen = true;
  }

  public closeModal(): void {
    this.modalOpen = false;
  }
}
