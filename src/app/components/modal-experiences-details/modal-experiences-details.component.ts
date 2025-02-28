import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {DataObjectModel} from "../../models/data-object.model";

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

  public closeModal(): void {
    this.close.emit();
  }
}
