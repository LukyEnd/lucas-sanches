import {Component} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {SkillsService} from "../../services/skills.service";
import {SkillModel} from "../../models/skill-model";
import {TextPageModel} from "../../models/text-page-model";

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
  public textPageSkill: TextPageModel;
  public skills: SkillModel[] = [];

  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.getSkills();
    this.textPageSkill = this.skillsService.getTextPageSkill();
  }
}
