import {Injectable} from '@angular/core';

declare var fullpage: any;

@Injectable({
  providedIn: 'root',
})
export class FullpageService {
  public fullpageInstance: any;

  public initializeFullpage(): void {
    if (typeof fullpage !== 'undefined') {
      this.fullpageInstance = new fullpage('#fullpage', {

        // Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['home', 'about', 'training', 'experiences', 'skills', 'projects', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Inicial', 'Sobre mim', 'Experiências', 'Habilidades', 'Projetos', 'Contato'],
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
        resetSliders: false,
        normalScrollElements: '#container-about-page, .description-about-page',
        scrollOverflowMacStyle: false,
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
    } else {
      console.error('Fullpage.js não foi carregado corretamente');
    }
  }

  public moveToSection(section: string): void {
    if (this.fullpageInstance) {
      this.fullpageInstance.moveTo(section);
    } else {
      console.error('Fullpage.js não foi inicializado');
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
}
