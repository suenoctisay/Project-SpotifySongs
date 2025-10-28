import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// services
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-songs-filter',
  templateUrl: './songs-filter.html',
  styleUrl: './songs-filter.scss',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
})

export class SongsFilterComponent {
  searchSongsForm = new FormGroup({
    artist: new FormControl(''),
    song: new FormControl(''),
    album: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService
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
    this.filterService.setValueSong(saveValue);
  }
}
