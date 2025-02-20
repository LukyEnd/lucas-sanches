import {ImagePageModel} from "./images-pages.model";
import {TitleAboutPageModel} from "./title-about-page.model";

export class DataAboutPageModel {
  constructor(
    public title: TitleAboutPageModel,
    public subtitle: string,
    public description: string[],
    public image: ImagePageModel
  ) {
  }
}
