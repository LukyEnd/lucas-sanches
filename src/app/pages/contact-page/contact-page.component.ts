import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', './../base.scss']
})
export class ContactPageComponent {
  public emailUser: string = 'sanchesluka31@gmail.com';
}
