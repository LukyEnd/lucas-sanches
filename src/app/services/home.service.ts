import {Injectable} from '@angular/core';
import {HomePageModel} from "../models/data-home-page.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homePageData: HomePageModel = require('./json/pt/data-home-page.json');

  public getHomePageData(): HomePageModel {
    return this.homePageData;
  }
}
