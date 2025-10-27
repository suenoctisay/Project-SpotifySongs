import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

// services
import { AppService } from '../../../shared/filter.service';

@Component({
  selector: 'app-playlist-filter',
  templateUrl: './playlist-filter.html',
  styleUrl: './playlist-filter.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    // MatAutocompleteModule,
  ],
})

export class PlaylistFilterComponent {
  searchPlaylistForm = new FormGroup({
    title: new FormControl(''),
    creator: new FormControl(''),
    genre: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) { }

  OnInit() {
    this.searchPlaylistForm = this.formBuilder.group({
      title: [''],
      creator: [''],
      genre: [''],
    });
  }

  search(): void {
    const saveValue = this.searchPlaylistForm.value;
    console.log('Form Values:', this.searchPlaylistForm.value);
    this.appService.getValue(saveValue);
    console.log('Search Values:', saveValue);
  }
}
