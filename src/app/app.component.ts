import {HomePageComponent} from "./pages/home-page/home-page.component";

declare var fullpage: any;

import {AfterViewInit, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AboutPageComponent, ProjectsPageComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'lucas-sanches';

  ngAfterViewInit(): void {
    if (typeof fullpage !== 'undefined') {
      new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ['home', 'about', 'skills', 'portfolio', 'contact', 'teste'],
        recordHistory: false, // Para evitar que o histórico de navegação altere o comportamento
        menu: '#menu',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#f2f2f2', '#f2f2f2'],
      });
    } else {
      console.error('fullpage.js não está carregado corretamente');
    }
  }
}
