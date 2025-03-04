import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FullPageService} from "../../services/full-page.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RandomTextsService} from "../../services/random-texts.service";
import {RandomTextModel} from "../../models/data-random-text.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public randomTexts: RandomTextModel
  public isLanguageMenuOpen = false;
  public selectedLanguage = { code: 'pt', icon: 'assets/language-icons/brasil-icon.png' };

  constructor(
    private fullPageService: FullPageService,
    private randomTextsService: RandomTextsService,
    private router: Router, private route: ActivatedRoute
  ) {
    this.randomTexts = this.randomTextsService.getRandomText();
  }

  public scrollToHome(): void {
    this.fullPageService.moveToSection('home');
  }

  public scrollToContact() {
    this.fullPageService.moveToSection('contact');
  }


  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  changeLanguage(language: string): void {
    let languageIcon = '';

    switch (language) {
      case 'pt':
        languageIcon = 'assets/language-icons/brasil-icon.png';
        break;
      case 'es':
        languageIcon = 'assets/language-icons/espanha-icon.png';
        break;
      case 'en':
        languageIcon = 'assets/language-icons/eua-icon.png';
        break;
    }

    this.selectedLanguage = { code: language, icon: languageIcon };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { lang: language },
      queryParamsHandling: 'merge'
    });
    this.isLanguageMenuOpen = false;
  }
}
