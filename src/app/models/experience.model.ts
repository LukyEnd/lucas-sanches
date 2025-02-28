import {DataObjectModel} from "./data-object.model";

export class ExperienceModel {
  constructor(
    public titleObject: string,
    public data: DataObjectModel[]
  ) {
  }
}
