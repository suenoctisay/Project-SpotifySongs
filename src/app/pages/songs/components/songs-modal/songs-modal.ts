import {  Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material imports
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-songs-new-modal',
  templateUrl: './songs-modal.html',
  styleUrl: './songs-modal.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatButtonModule
  ],
})

export class SongsModalCompoent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<SongsModalCompoent>);

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

  ngOnInit() {
    var data = this.dialogRef._containerInstance._config.data
    if(data == null){
      this.addNewSongForm = this.formBuilder.group({
            artist: new FormControl (''),
            song: new FormControl (''),
            album: new FormControl (''),
            year: new FormControl (''),
            genre: new FormControl (''),
            duration: new FormControl ('')
          });
    } else {
      this.openModal(data)
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const newSong = this.addNewSongForm.value;
    this.dialogRef.close(newSong);
  }

  async openModal(song: any){
    this.addNewSongForm.get('artist')?.setValue(song.artist)
    this.addNewSongForm.get('song')?.setValue(song.song)
    this.addNewSongForm.get('album')?.setValue(song.album)
    this.addNewSongForm.get('year')?.setValue(song.year)
    this.addNewSongForm.get('genre')?.setValue(song.genre)
    this.addNewSongForm.get('duration')?.setValue(song.duration)
  }
}
