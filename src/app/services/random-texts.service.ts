import {EventEmitter, Injectable} from '@angular/core';
import {RandomTextModel} from "../models/data-random-text.model";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RandomTextsService {
  private randomText: BehaviorSubject<RandomTextModel> =
    new BehaviorSubject<RandomTextModel>({} as RandomTextModel);

  // Evento que será disparado sempre que o texto for atualizado
  public textUpdated = new EventEmitter<void>();

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      const lang: string = params.get('lang') || 'pt';
      this.loadRandomTextData(lang);
    });
  }

  public getRandomText(): Observable<RandomTextModel> {
    return this.randomText.asObservable();
  }

  private loadRandomTextData(lang: string): void {
    try {
      const data = require(`./json/${lang}/random-texts-page.${lang}.json`);
      this.randomText.next(data);
    } catch (error) {
      console.error(`Erro ao carregar o JSON para o idioma ${lang}`, error);
      const fallbackData = require('./json/pt/random-texts-page.pt.json');
      this.randomText.next(fallbackData);
    }
  }
}
