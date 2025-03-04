import {Injectable} from '@angular/core';
import {DataSkillPageModel} from "../models/data-skills-page.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillPageData: BehaviorSubject<DataSkillPageModel> =
    new BehaviorSubject<DataSkillPageModel>({} as DataSkillPageModel);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang: string = params.get('lang') || 'pt';
      this.loadSkillPageData(lang);
    });
  }

  public getSkillPageData(): Observable<DataSkillPageModel> {
    return this.skillPageData.asObservable();
  }

  private loadSkillPageData(lang: string): void {
    try {
      const data = require(`./json/${lang}/data-skill-page.${lang}.json`);
      this.skillPageData.next(data);
    } catch (error) {
      console.error(`Erro ao carregar o JSON para o idioma ${lang}`, error);
      const fallbackData = require('./json/pt/data-skill-page.pt.json');
      this.skillPageData.next(fallbackData);
    }
  }
}
