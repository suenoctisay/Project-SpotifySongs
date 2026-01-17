import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app imports
import { Artist } from '../../interface/artists.interface';
import { Artist_Data } from '../../mock/artists.mock';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-artists-gallery',
  templateUrl: './artists-gallery.html',
  styleUrl: './artists-gallery.scss',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
})

export class ArtistsGalleryComponent {
  artist: Artist[] = Artist_Data;
  filteredArtists$!: Observable<Artist[]>

  constructor(
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.sortedArtists();
    this.applyFilters();
  }


  // SORT ARTISTS
  sortedArtists(){
    let filtered = this.artist;
    const sorted = filtered.sort((a, b) => {
      const nameA = (a.name || '').toLowerCase();
      const nameB = (b.name || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });
    return sorted;
  }

  // FILTER FUNCTION
  applyFilters(): void {
    this.filteredArtists$ = this.filterService.getValue().pipe(
      startWith({ name: '' }),
      map((saveValue) => {
        const searchArtist = (saveValue.name || '').toLowerCase().trim();
        console.log('Search term:', searchArtist);

        if (!searchArtist) {
          console.log('No search term, returning all artists:', this.artist);
          return this.artist;
        }

        const filtered = this.artist.filter((artist) => {
          const artistName = (artist.name || '').toLowerCase();
          const nameMatch = artistName.includes(searchArtist);
          return nameMatch;
        });

        console.log('Filtered artists:', filtered);
        return filtered;
      })
    );
}

  seeArtist(artistName: string): void {
    alert(`You have clicked on artist: ${artistName}`);
  }
}
