import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app imports
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';
import { AppService } from '../../../../core/services/app.service';


@Component({
  selector: 'app-playlist-gallery',
  templateUrl: './playlist-gallery.html',
  styleUrl: './playlist-gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
})

export class PlaylistGalleryComponent {
  playlist: Playlist[] = Playlist_Data;
  filteredPlaylists = [...this.playlist];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getFilteredPlaylists();
  }

  getFilteredPlaylists(): void {
    this.appService.setValue().subscribe((saveValue) => {
      if (!saveValue) {
        this.filteredPlaylists = [...this.playlist];
        return;
      }

      this.filteredPlaylists = this.playlist.filter((playlist) => {
        const searchTerm = (saveValue.creator || '') + (saveValue.genre || '');
        const combinedFields = playlist.creator + playlist.genre;
        return combinedFields.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }

}
