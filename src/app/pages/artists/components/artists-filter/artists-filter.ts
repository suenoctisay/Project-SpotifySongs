import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-artists-filter',
  templateUrl: './artists-filter.html',
  styleUrl: './artists-filter.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})

export class ArtistsFilterComponent {
  @Output() search = new EventEmitter<{
    artist: string;
  }>();

  searchArtistForm = new FormGroup({
    artist: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  OnInit() {
    this.searchArtistForm = this.formBuilder.group({
      artist: [''],
    });
  }

  filterByArtist(event: Event): void {
    const artist = (event.target as HTMLInputElement).value;
    this.onSearch({ artist });
  }

  onSearch(updatedFilter: Partial<{
    artist: string;
  }>) {
    const currentFilters = {
      title: this.searchArtistForm.value.artist || '',
    };
    this.search.emit({ ...currentFilters, ...updatedFilter, artist: updatedFilter.artist || '' });
  }


}
