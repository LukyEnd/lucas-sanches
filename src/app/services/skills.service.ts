import {Injectable} from '@angular/core';
import {DataSkillPageModel} from "../models/data-skills-page.model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private dataSkillPage: DataSkillPageModel = require('./json/pt/data-skill-page.pt.json');

  public dataPage(): DataSkillPageModel {
    return this.dataSkillPage;
  }
}
