import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {RandomTextModel} from "../models/data-random-text.model";
import {RandomTextsService} from "./random-texts.service";

declare var fullpage: any;

@Injectable({
  providedIn: 'root',
})
export class FullPageService {
  public fullPageInstance: any;
  private randomText!: RandomTextModel

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private randomTextsService: RandomTextsService,
  ) {
    this.randomTextsService.getRandomText().subscribe((dataRandom: RandomTextModel) => {
      this.randomText = dataRandom;
    });
  }

  public initializeFullPage(): void {
    if (typeof fullpage !== 'undefined') {
      this.fullPageInstance = new fullpage('#fullpage', {

        // Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['home', 'about', 'skills', 'projects', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [
          this.randomText.home,
          this.randomText.about,
          this.randomText.experience,
          this.randomText.projects,
          this.randomText.contact
        ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        // Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        offsetSections: false,
        resetSliders: true,
        scrollOverflowMacStyle: true,
        scrollOverflowReset: false,
        skipIntermediateItems: false,
        touchSensitivity: 15,
        bigSectionsDestination: null,
        adjustOnNavChange: true,

        // Accessibility
        keyboardScrolling: false,
        animateAnchor: true,
        recordHistory: true,

        // Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
        lazyLoading: true,
        lazyLoadThreshold: 0,
        observer: true,

        // Events
        afterLoad: (origin: any, destination: any, direction: any): void => {
          this.handleAnimations(destination.anchor);
        },
        afterSlideLoad: (section: any, origin: any, destination: any, direction: any) => {
          document.querySelector('.fp-arrow.fp-prev')?.classList.toggle('hidden', destination.index === 0);
          const totalSlides = destination.item.parentElement?.querySelectorAll('.slide').length || 0;
          document.querySelector('.fp-arrow.fp-next')?.classList.toggle('hidden', destination.index === totalSlides - 1);
        }
      });
      this.updateArrowVisibility();
    } else {
      console.error('Fullpage.js não foi carregado corretamente');
    }
    this.updateArrowVisibility();
  }

  public moveToSection(section: string): void {
    if (this.fullPageInstance) {
      this.fullPageInstance.moveTo(section);
    } else {
      console.error('Fullpage.js não foi inicializado');
    }
  }

  public updateNavigationTooltips(): void {
    if (this.fullPageInstance) {
      const tooltips = [
        this.randomText.home,
        this.randomText.about,
        this.randomText.experience,
        this.randomText.projects,
        this.randomText.contact
      ];

      this.fullPageInstance.setNavigationTooltips(tooltips);
    }
  }

  private handleAnimations(currentSection: string): void {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    sections.forEach((section) => {
      const sectionElement = document.querySelector(`.section[data-anchor="${section}"]`);
      if (sectionElement) {
        if (section === currentSection) {
          this.activateSectionAnimations(sectionElement);
        } else {
          this.resetSectionAnimations(sectionElement);
        }
      }
    });
  }

  private activateSectionAnimations(section: Element): void {
    const effectElements = section.querySelectorAll('.animate__animated');
    effectElements.forEach((element: any): void => {
      element.classList.remove('animate__fadeInUp');
      void element.offsetWidth;
      element.classList.add('animate__fadeInUp');
      element.style.visibility = 'visible';
      element.style.opacity = '1';
    });
  }

  private resetSectionAnimations(section: Element): void {
    const effectElements = section.querySelectorAll('.animate__animated');
    effectElements.forEach((element: any): void => {
      element.classList.remove('animate__fadeInUp');
      element.style.visibility = 'hidden';
      element.style.opacity = '0';
    });
  }

  private updateArrowVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const firstSlide = document.querySelector('.slide:first-child');
    const lastSlide = document.querySelector('.slide:last-child');
    document.querySelector('.fp-arrow.fp-prev')?.classList.toggle('hidden', true);
    document.querySelector('.fp-arrow.fp-next')?.classList.toggle('hidden', lastSlide === firstSlide);
  }
}
