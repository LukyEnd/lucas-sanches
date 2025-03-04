import {Injectable} from '@angular/core';
import {DataContactPageModel} from "../models/data-contact-page.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactPageData: BehaviorSubject<DataContactPageModel> =
    new BehaviorSubject<DataContactPageModel>({} as DataContactPageModel);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang: string = params.get('lang') || 'pt';
      this.loadContactPageData(lang);
    });
  }

  public getContactPageData(): Observable<DataContactPageModel> {
    return this.contactPageData.asObservable();
  }

  private loadContactPageData(lang: string): void {
    try {
      const data = require(`./json/${lang}/data-contact-page.${lang}.json`);
      this.contactPageData.next(data);
    } catch (error) {
      console.error(`Erro ao carregar o JSON para o idioma ${lang}`, error);
      const fallbackData = require('./json/pt/data-contact-page.pt.json');
      this.contactPageData.next(fallbackData);
    }
  }
}
