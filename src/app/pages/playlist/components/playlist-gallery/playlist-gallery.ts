import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// app imports
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';
import { AppService } from '../../../../core/services/app.service';
import { map, Observable, startWith } from 'rxjs';


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
  filteredPlaylists$!: Observable<Playlist[]>;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.filteredPlaylists$ = this.appService.setValue().pipe(
      startWith({ creator: '', genre: '' }), 
      map((saveValue) => {
        const searchCreator = (saveValue.creator || '').toLowerCase().trim();
        const searchGenre = (saveValue.genre || '').toLowerCase().trim();

        if (!searchCreator && !searchGenre) {
          
        }
        return this.playlist.filter((playlist) => {
          const playlistCreator = (playlist.creator || '').toLowerCase();
          const playlistGenre = (playlist.genre || '').toLowerCase();

          const creatorMatch = searchCreator
            ? playlistCreator.includes(searchCreator)
            : true;

          const genreMatch = searchGenre
            ? playlistGenre.includes(searchGenre)
            : true;

          return creatorMatch && genreMatch;
        });
      })
    );
  }

}
