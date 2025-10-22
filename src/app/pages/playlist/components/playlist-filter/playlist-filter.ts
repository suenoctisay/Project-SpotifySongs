import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// services
import { AppService } from '../../../../core/services/app.service';

@Component({
  selector: 'app-playlist-filter',
  templateUrl: './playlist-filter.html',
  styleUrl: './playlist-filter.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})

export class PlaylistFilterComponent {
  searchPlaylistForm = new FormGroup({
    creator: new FormControl(''),
    genre: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) { }

  OnInit() {
    this.searchPlaylistForm = this.formBuilder.group({
      creator: [''],
      genre: [''],
    });
  }

  search() {
    const saveValue = this.searchPlaylistForm.value;
    this.appService.getValue(saveValue);
    console.log(saveValue);
  }
}
