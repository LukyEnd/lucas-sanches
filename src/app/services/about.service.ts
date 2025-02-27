import {Injectable} from '@angular/core';
import {DataAboutPageModel} from "../models/data-about-page.model";
import {ExperienceModel} from "../models/experience.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutPageData: DataAboutPageModel = require('./json/pt/data-about-page.pt.json');
  private experiencesPageData: ExperienceModel[] = require('./json/pt/data-experiences-page.pt.json');


  public getAboutPageData(): DataAboutPageModel {
    return this.aboutPageData;
  }

  public getExperiencesPageData(): ExperienceModel[] {
    return this.experiencesPageData;
  }
}
