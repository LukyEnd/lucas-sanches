import {socialNetworksModels} from "./social-networks.models";
import {SkillModel} from "./skill.model";
import {titleSkillPageModel} from "./title-skill-page.model";

export class DataSkillPageModel {
  constructor(
    public title: titleSkillPageModel,
    public description: string[],
    public socialNetworks: socialNetworksModels,
    public listSkills: SkillModel[]
  ) {
  }
}
