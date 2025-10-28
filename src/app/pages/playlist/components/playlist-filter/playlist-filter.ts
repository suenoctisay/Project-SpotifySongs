import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
  @Output() search = new EventEmitter<{
    title: string;
    creator: string;
    genre: string
  }>();

  searchPlaylistForm = new FormGroup({
    title: new FormControl(''),
    creator: new FormControl(''),
    genre: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  OnInit() {
    this.searchPlaylistForm = this.formBuilder.group({
      title: [''],
      creator: [''],
      genre: [''],
    });
  }

  filterByTitle(event: Event): void {
    const title = (event.target as HTMLInputElement).value;
    this.onSearch({ title });
  }

  filterByCreator(event: Event): void {
    const creator = (event.target as HTMLInputElement).value;
    this.onSearch({ creator });
  }

  filterByGenre(event: Event): void {
    const genre = (event.target as HTMLInputElement).value;
    this.onSearch({ genre });
  }

  onSearch(updatedFilter: Partial<{
    title: string;
    creator: string;
    genre: string;
  }>) {
    const currentFilters = {
      title: this.searchPlaylistForm.value.title || '',
      creator: this.searchPlaylistForm.value.creator || '',
      genre: this.searchPlaylistForm.value.genre || '',
    };
    this.search.emit({ ...currentFilters, ...updatedFilter });
  }

}
