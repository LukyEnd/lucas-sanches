import {Injectable} from '@angular/core';
import {RandomTextModel} from "../models/data-random-text.model";

@Injectable({
  providedIn: 'root'
})
export class RandomTextsService {
  private randomText: RandomTextModel = require('./json/pt/random-texts-page.pt.json');

  public getRandomText(): RandomTextModel {
    return this.randomText;
  }
}
