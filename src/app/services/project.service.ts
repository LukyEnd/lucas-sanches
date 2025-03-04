import {Injectable} from '@angular/core';
import {ProjectDataModel} from "../models/data-project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsPageData: ProjectDataModel = require('./json/pt/data-projects.pt.json');

  public getProjectsPageData(): ProjectDataModel {
    return this.projectsPageData;
  }
}
