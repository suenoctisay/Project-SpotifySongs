import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app imports
import { Artist } from '../../interface/artists.interface';
import { Artist_Data } from '../../mock/artists.mock';

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
  @Input() searchedArtirst: {
    artist: string;
  } = {
    artist: '',
  };

  artist: Artist[] = Artist_Data;
  filteredArtist = [...this.artist];

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.applyFilters();
  }

  // FILTER FUNCTION
  applyFilters(): void {
    this.filteredArtist = this.artist.filter((artist) => {
      const nameMatch = this.searchedArtirst.artist
        ? artist.name.toLowerCase().includes(this.searchedArtirst.artist.toLowerCase())
        : true;

      return nameMatch;
    });
  }

  seeArtist(ArtistName: string): void {
    alert(`You have clicked on artist: ${ArtistName}`);
  }
}
