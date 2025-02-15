import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {MatIconModule} from "@angular/material/icon";

declare var fullpage: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    MatIconModule
  ],
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
        recordHistory: false,
        menu: '#menu',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#f2f2f2', '#f2f2f2'],
      });
    } else {
      console.error('fullpage.js não está carregado corretamente');
    }
  }
}
