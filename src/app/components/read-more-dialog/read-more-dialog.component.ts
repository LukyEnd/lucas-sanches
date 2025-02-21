import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-read-more-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    NgForOf,
    MatDialogActions,
    MatButton,
    MatDialogModule
  ],
  templateUrl: './read-more-dialog.component.html',
  styleUrl: './read-more-dialog.component.scss'
})
export class ReadMoreDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ReadMoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string[] }
  ) {
  }

  public close(): void {
    this.dialogRef.close();
  }
}
