import {Injectable} from '@angular/core';
import {SkillModel} from "../models/skill-model";
import {TextPageModel} from "../models/text-page-model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: SkillModel[] = require('./json/skills.json');
  private textPageSkill: TextPageModel = require('./json/tex-page-kill.json');

  public getSkills(): SkillModel[] {
    return this.skills;
  }

  public getTextPageSkill(): TextPageModel {
    return this.textPageSkill;
  }
}
