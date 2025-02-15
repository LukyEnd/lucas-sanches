import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FullpageService} from "../../services/fullpage.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private fullpageService: FullpageService) {}

 public scrollToContact() {
    this.fullpageService.moveToSection('contact');
  }
}
