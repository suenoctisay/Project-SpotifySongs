import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material imports
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-songs-new-modal',
  templateUrl: './songs-new-modal.html',
  styleUrl: './songs-new-modal.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatButtonModule,
  ],
})

export class SongsNewModalCompoent {
  readonly dialogRef = inject(MatDialogRef<SongsNewModalCompoent>);

  addNewSongForm = new FormGroup({
    artist: new FormControl(''),
    song: new FormControl(''),
    album: new FormControl(''),
    year: new FormControl(''),
    genre: new FormControl(''),
    duration: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  OnInit() {
    this.addNewSongForm = this.formBuilder.group({
      artist: [''],
      song: [''],
      album: [''],
      year: [''],
      genre: [''],
      duration: ['']
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const newSong = this.addNewSongForm.value;
    this.dialogRef.close(newSong);
  }



}
