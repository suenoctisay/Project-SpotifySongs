import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-songs-filters',
  templateUrl: './songs-filters.html',
  styleUrl: './songs-filters.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})

export class SongsFiltersComponent { }
