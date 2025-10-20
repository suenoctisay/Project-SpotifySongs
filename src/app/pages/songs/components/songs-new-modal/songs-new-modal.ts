import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';

// angular material imports
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-songs-new-modal',
  templateUrl: './songs-new-modal.html',
  styleUrl: './songs-new-modal.scss',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
})

export class SongsNewModalCompoent {
  readonly dialogRef = inject(MatDialogRef<SongsNewModalCompoent>);

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log('Save new song');
  }
}
