import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss', './../base.scss']
})
export class SkillsPageComponent {

}
