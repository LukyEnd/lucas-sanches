import {ReadMoreDialogComponent} from '../../components/read-more-dialog/read-more-dialog.component';
import {AboutService} from "../../services/about.service";
import {Component, HostListener, Inject, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DataAboutPageModel} from "../../models/data-about-page.model";
import {FullpageService} from "../../services/fullpage.service";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    MatButton,
    NgIf,
    MatDialogModule,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss', './../base.scss']
})
export class AboutPageComponent {
  public aboutPage: DataAboutPageModel;
  public isMobile: boolean = false;
  public isOpen: boolean = false;

  constructor(
    private aboutPageService: AboutService,
    public dialog: MatDialog,
    private fullpageService: FullpageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.aboutPage = this.aboutPageService.getAboutPageData();
    this.checkMobile();
  }

  @HostListener('window:resize', [])
  checkMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 400;
    }
  }

  public openReadMoreDialog(): void {
    if (!this.fullpageService.fullpageInstance) {
      this.fullpageService.initializeFullpage();
    }
    this.fullpageService.pauseFullpage();
    this.dialog.open(ReadMoreDialogComponent, {
      width: '500px',
      disableClose: false,
      hasBackdrop: true,
      panelClass: 'custom-modal-container',
      data: {description: this.aboutPage.description}
    }).afterClosed().subscribe(() => {
      this.fullpageService.resumeFullpage();
    });
  }
}
