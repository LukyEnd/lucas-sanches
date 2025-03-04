import {socialNetworksModels} from "./social-networks.models";
import {titleSkillPageModel} from "./title-skill-page.model";
import {ImagePageModel} from "./images-pages.model";

export class DataSkillPageModel {
  constructor(
    public title: titleSkillPageModel,
    public description: string[],
    public socialNetworks: socialNetworksModels,
    public listSkills: ImagePageModel[]
  ) {
  }
}
