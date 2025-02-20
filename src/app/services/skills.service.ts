import {Injectable} from '@angular/core';
import {DataSkillPageModel} from "../models/data-skills-page.data";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private dataSkillPage: DataSkillPageModel = require('./json/data-skill-page.json');

  public dataPage(): DataSkillPageModel {
    return this.dataSkillPage;
  }
}
