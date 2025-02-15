import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
