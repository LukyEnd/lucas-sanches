import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FullpageService} from "./services/fullpage.service";
import {FooterComponent} from "./components/footer/footer.component";
import {SkillsPageComponent} from "./pages/skills-page/skills-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    NavbarComponent,
    FooterComponent,
    SkillsPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'lucas-sanches';

  constructor(private fullpageService: FullpageService) {
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      if (!window.location.hash || window.location.hash !== '#home') {
        window.location.hash = '#home';
      }
    }
  }

  public ngAfterViewInit(): void {
    this.fullpageService.initializeFullpage();
  }
}
