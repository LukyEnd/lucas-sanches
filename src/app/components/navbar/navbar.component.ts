import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FullPageService} from "../../services/full-page.service";
import {NgOptimizedImage} from "@angular/common";
import {RandomTextsService} from "../../services/random-texts.service";
import {RandomTextModel} from "../../models/data-random-text.model";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public randomTexts: RandomTextModel

  constructor(
    private fullPageService: FullPageService,
    private randomTextsService: RandomTextsService
  ) {
    this.randomTexts = this.randomTextsService.getRandomText();
  }

  public scrollToHome(): void {
    this.fullPageService.moveToSection('home');
  }

  public scrollToContact() {
    this.fullPageService.moveToSection('contact');
  }
}
