import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FullpageService} from "./services/fullpage.service";
import {FooterComponent} from "./components/footer/footer.component";

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
    MatIconModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'lucas-sanches';

  constructor(private fullpageService: FullpageService) {}

  public ngAfterViewInit(): void {
    this.fullpageService.initializeFullpage();
  }
}
