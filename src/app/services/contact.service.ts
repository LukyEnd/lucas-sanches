import {Injectable} from '@angular/core';
import {DataContactPageModel} from "../models/data-contact-page.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactPageData: DataContactPageModel = require('./json/pt/data-contact-page.json');

  public getContactPageData(): DataContactPageModel {
    return this.contactPageData;
  }
}
