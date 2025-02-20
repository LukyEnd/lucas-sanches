import {Component} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {SkillsService} from "../../services/skills.service";
import {DataSkillPageModel} from "../../models/data-skills-page.data";

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgClass,
    NgStyle
  ],
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss', './../base.scss']
})
export class SkillsPageComponent {
  public dataSkillPage: DataSkillPageModel;

  constructor(private skillsService: SkillsService) {
    this.dataSkillPage = this.skillsService.dataPage();
  }
}
