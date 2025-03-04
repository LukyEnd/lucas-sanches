import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FullPageService} from "../../services/full-page.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RandomTextsService} from "../../services/random-texts.service";
import {RandomTextModel} from "../../models/data-random-text.model";
import {ActivatedRoute, Router} from "@angular/router";
import {SelectedLanguageModel} from "../../models/selected-language.model";

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
export class NavbarComponent implements OnInit {
  public randomTexts!: RandomTextModel;
  public isLanguageMenuOpen: boolean = false;
  public selectedLanguage!: SelectedLanguageModel;

  constructor(
    private fullPageService: FullPageService,
    private randomTextsService: RandomTextsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.randomTextsService.getRandomText().subscribe((dataRandom: RandomTextModel) => {
      this.randomTexts = dataRandom;
    });
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const lang: string = params.get('lang') || 'pt';
      this.updateSelectedLanguage(lang);
    });
  }

  public scrollToHome(): void {
    this.fullPageService.moveToSection('home');
  }

  public scrollToContact() {
    this.fullPageService.moveToSection('contact');
  }

  public toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  public changeLanguage(language: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {lang: language},
      queryParamsHandling: 'merge'
    }).then(() => {
      this.updateSelectedLanguage(language);
    });

    this.isLanguageMenuOpen = false;
  }

  private updateSelectedLanguage(language: string): void {
    const languageIcons: Record<string, string> = {
      pt: 'assets/language-icons/brasil-icon.png',
      es: 'assets/language-icons/espanha-icon.png',
      en: 'assets/language-icons/eua-icon.png'
    };

    this.selectedLanguage = {
      code: language,
      icon: languageIcons[language] || languageIcons['pt']
    };
  }
}
