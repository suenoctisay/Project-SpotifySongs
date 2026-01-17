import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterService } from '../../../shared/services/filter.service';

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
  searchArtistForm = new FormGroup({
    artist: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private filterService: FilterService,
  ) { }

  OnInit() {
    this.searchArtistForm = this.formBuilder.group({
      artist: [''],
    });
  }

  search() {
    const saveValue = this.searchArtistForm.value;
    this.filterService.setValue({ name: saveValue.artist });
  }

}
