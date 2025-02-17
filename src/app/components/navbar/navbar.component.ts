import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FullpageService} from "../../services/fullpage.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private fullpageService: FullpageService) {
  }

  public scrollToHome(): void {
    this.fullpageService.moveToSection('home');
  }

  public scrollToContact() {
    this.fullpageService.moveToSection('contact');
  }
}
