import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {DataContactPageModel} from "../../models/data-contact-page.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', './../base.scss']
})
export class ContactPageComponent {
  public dataContactPage!: DataContactPageModel;

  constructor(private contactService: ContactService) {
    this.contactService.getContactPageData().subscribe((dataContact: DataContactPageModel) => {
      this.dataContactPage = dataContact;
    });
  }
}
