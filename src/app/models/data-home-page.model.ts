import {TitleHomePageModel} from "./title-home-page.model";
import {ImagePageModel} from "./images-pages.model";

export class HomePageModel {
  constructor(
    public title: TitleHomePageModel,
    public description: string[],
    public aboutMe: string,
    public backgroundImage: ImagePageModel,
    public mainImage: ImagePageModel,
    public iconImage: ImagePageModel
  ) {}
}
