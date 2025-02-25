import {Injectable} from '@angular/core';

declare var fullpage: any;

@Injectable({
  providedIn: 'root',
})
export class FullpageService {
  public fullpageInstance: any;
  private currentSection: string | null = null;

  public initializeFullpage(): void {
    if (typeof fullpage !== 'undefined') {
      this.fullpageInstance = new fullpage('#fullpage', {
        autoScrolling: true,
        fitToSection: true,
        scrollBar: true,
        loopTop: false,
        loopBottom: false,
        keyboardScrolling: true,
        navigation: true,
        anchors: ['home', 'about', 'skills', 'projects', 'contact'],
        recordHistory: true,
        menu: '#menu',
        lazyLoading: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        observer: true,
        afterLoad: (origin: any, destination: any, direction: any): void => {
          this.handleAnimations(destination.anchor);
        },
      });
    } else {
      console.error('Fullpage.js não foi carregado corretamente');
    }
  }

  public pauseFullpage(): void {
    if (this.fullpageInstance && this.fullpageInstance.getActiveSection) {
      const currentSection = this.fullpageInstance.getActiveSection();
      if (currentSection) {
        this.currentSection = currentSection.anchor;
      }
      this.fullpageInstance.setAutoScrolling(false);
      this.fullpageInstance.setKeyboardScrolling(false);
    } else {
      console.error('FullPage não foi inicializado corretamente');
    }
  }

  public resumeFullpage(): void {
    if (this.fullpageInstance) {
      this.fullpageInstance.setAutoScrolling(true);
      this.fullpageInstance.setKeyboardScrolling(true);

      if (this.currentSection) {
        this.fullpageInstance.moveTo(this.currentSection);
      }
    } else {
      console.error('FullPage não foi inicializado corretamente');
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
    effectElements.forEach((element: any) => {
      element.classList.remove('animate__fadeInUp');
      void element.offsetWidth;
      element.classList.add('animate__fadeInUp');
      element.style.visibility = 'visible';
      element.style.opacity = '1';
    });
  }

  private resetSectionAnimations(section: Element): void {
    const effectElements = section.querySelectorAll('.animate__animated');
    effectElements.forEach((element: any) => {
      element.classList.remove('animate__fadeInUp');
      element.style.visibility = 'hidden';
      element.style.opacity = '0';
    });
  }
}
