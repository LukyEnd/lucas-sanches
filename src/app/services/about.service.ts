import {Injectable} from '@angular/core';
import {DataAboutPageModel} from "../models/data-about-page.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutPageData: DataAboutPageModel = require('./json/pt/data-about-page.json');

  public getAboutPageData(): DataAboutPageModel {
    return this.aboutPageData;
  }
}
