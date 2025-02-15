import {Injectable} from '@angular/core';

declare var fullpage: any;

@Injectable({
  providedIn: 'root',
})
export class FullpageService {
  public fullpageInstance: any;

  constructor() {
  }

  public initializeFullpage(): void {
    if (typeof fullpage !== 'undefined') {
      this.fullpageInstance = new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ['home', 'about', 'portfolio', 'contact'],
        recordHistory: false,
        menu: '#menu',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#f2f2f2', '#f2f2f2'],
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
}
