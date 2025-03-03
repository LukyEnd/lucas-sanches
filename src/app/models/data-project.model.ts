import { ImagePageModel } from "./images-pages.model";

export class ProjectModel {
  constructor(
    public title: string,
    public description: string,
    public image: ImagePageModel,
    public link: string
  ) {}
}
