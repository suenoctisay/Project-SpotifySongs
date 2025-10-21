import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// services
import { AppService } from '../../../../core/services/app.service';

@Component({
  selector: 'app-songs-filters',
  templateUrl: './songs-filters.html',
  styleUrl: './songs-filters.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})

export class SongsFiltersComponent {
  searchSongsForm = new FormGroup({
    artist: new FormControl(''),
    song: new FormControl(''),
    album: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) { }

  OnInit() {
    this.searchSongsForm = this.formBuilder.group({
      artist: [''],
      song: [''],
      album: [''],
    });
  }

  search() {
    const saveValue = this.searchSongsForm.value;
    this.appService.getSongs(saveValue);
  }
}
