import {socialNetworksModels} from "./social-networks-models";

export class TextPageModel {
  constructor(
    public title: { skills: string[], and: string[], experiences: string[] },
    public description: string[],
    public socialNetworks: socialNetworksModels
  ) {
  }
}
