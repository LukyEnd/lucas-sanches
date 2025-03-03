import { Component } from '@angular/core';
import {ProjectCardComponent} from "../../components/project-card/project-card.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
