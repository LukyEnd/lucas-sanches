import {Injectable} from '@angular/core';
import {HomePageModel} from "../models/data-home-page.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homePageData: BehaviorSubject<HomePageModel> =
    new BehaviorSubject<HomePageModel>({} as HomePageModel);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang = params.get('lang') || 'pt';
      this.loadHomePageData(lang);
    });
  }

  public getHomePageData(): Observable<HomePageModel> {
    return this.homePageData.asObservable();
  }

  private loadHomePageData(lang: string): void {
    try {
      const data = require(`./json/${lang}/data-home-page.${lang}.json`);
      this.homePageData.next(data);
    } catch (error) {
      console.error(`Erro ao carregar o JSON para o idioma ${lang}`, error);
      const fallbackData = require('./json/pt/data-home-page.pt.json');
      this.homePageData.next(fallbackData);
    }
  }
}
