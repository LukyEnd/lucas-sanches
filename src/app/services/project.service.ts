import {Injectable} from '@angular/core';
import {ProjectDataModel} from "../models/data-project.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsPageData: BehaviorSubject<ProjectDataModel> =
    new BehaviorSubject<ProjectDataModel>({} as ProjectDataModel);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang: string = params.get('lang') || 'pt';
      this.loadProjectsPageData(lang);
    });
  }

  public getProjectsPageData(): Observable<ProjectDataModel> {
    return this.projectsPageData.asObservable();
  }

  private loadProjectsPageData(lang: string): void {
    try {
      const data = require(`./json/${lang}/data-projects.${lang}.json`);
      this.projectsPageData.next(data);
    } catch (error) {
      console.error(`Erro ao carregar o JSON para o idioma ${lang}`, error);
      const fallbackData = require('./json/pt/data-projects.pt.json');
      this.projectsPageData.next(fallbackData);
    }
  }
}
