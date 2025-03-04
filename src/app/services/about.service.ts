import {Injectable} from '@angular/core';
import {DataAboutPageModel} from "../models/data-about-page.model";
import {ExperienceModel} from "../models/experience.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutPageData: BehaviorSubject<DataAboutPageModel> =
    new BehaviorSubject<DataAboutPageModel>({} as DataAboutPageModel);
  private experiencesPageData: BehaviorSubject<ExperienceModel> =
    new BehaviorSubject<ExperienceModel>({} as ExperienceModel);
  private trainingPageData: BehaviorSubject<ExperienceModel> =
    new BehaviorSubject<ExperienceModel>({} as ExperienceModel);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang = params.get('lang') || 'pt';
      this.loadPageData(lang);
    });
  }

  public getAboutPageData():Observable<DataAboutPageModel>  {
    return this.aboutPageData.asObservable();
  }

  public getExperiencesPageData():Observable<ExperienceModel>  {
    return this.experiencesPageData.asObservable();
  }

  public getTrainingPageData(): Observable<ExperienceModel> {
    return this.trainingPageData.asObservable();
  }

  private loadPageData(lang: string): void {
    try {
      const aboutData = require(`./json/${lang}/data-about-page.${lang}.json`);
      this.aboutPageData.next(aboutData);
      const experiencesData = require(`./json/${lang}/data-experiences-page.${lang}.json`);
      this.experiencesPageData.next(experiencesData);
      const trainingData = require(`./json/${lang}/data-training-page.${lang}.json`);
      this.trainingPageData.next(trainingData);
    } catch (error) {
      console.error(`Erro ao carregar os JSONs para o idioma ${lang}`, error);
      this.aboutPageData.next(require('./json/pt/data-about-page.pt.json'));
      this.experiencesPageData.next(require('./json/pt/data-experiences-page.pt.json'));
      this.trainingPageData.next(require('./json/pt/data-training-page.pt.json'));
    }
  }
}
