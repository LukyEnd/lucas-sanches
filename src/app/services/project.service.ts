import {Injectable} from '@angular/core';
import {ProjectModel} from "../models/data-project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsPageData: ProjectModel[] = require('./json/pt/data-projects.pt.json');

  public getProjectsPageData(): ProjectModel[] {
    return this.projectsPageData;
  }
}
