import {TitleContactPageModel} from "./title-contact-page-model";
import {ImagePageModel} from "./images-pages.model";

export class DataContactPageModel {
  constructor(
    public title: TitleContactPageModel,
    public description: string,
    public emailUser: string,
    public image: ImagePageModel
  ) {
  }
}
