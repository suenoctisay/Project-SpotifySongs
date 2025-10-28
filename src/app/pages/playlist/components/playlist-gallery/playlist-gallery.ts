import { Component, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// app imports
import { PlaylistModalComponent } from '../playlist-modal/playlist-modal';
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';

// services
import { FilterService } from './../../../shared/services/filter.service';


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
  filteredPlaylists$!: Observable<Playlist[]>

  isEditing: boolean = true;

  constructor(
    private dialog: MatDialog,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.applyFilters();
   }

  // FILTER FUNCTION
  applyFilters(): void {
    this.filteredPlaylists$ = this.filterService.getValue().pipe(
      startWith({ title: '', creator: '', genre: '' }),
      map((saveValue) => {
        const searchTitle = (saveValue.title || '').toLowerCase().trim();
        const searchCreator = (saveValue.creator || '').toLowerCase().trim();
        const searchGenre = (saveValue.genre || '').toLowerCase().trim();

        if (!searchCreator && !searchGenre && !searchTitle) {
          return this.playlist;
        }

        return this.playlist.filter((playlist) => {
          const playlistTitle = (playlist.title || '').toLowerCase();
          const playlistCreator = (playlist.creator || '').toLowerCase();
          const playlistGenre = (playlist.genre || '').toLowerCase();

          const titleMatch = searchTitle
            ? playlistTitle.includes(searchTitle)
            : true;

          const creatorMatch = searchCreator
            ? playlistCreator.includes(searchCreator)
            : true;

          const genreMatch = searchGenre
            ? playlistGenre.includes(searchGenre)
            : true;

          return titleMatch && creatorMatch && genreMatch ;
        });
      })
    );
  }

  // OPEN MODAL - SEE | EDIT
  seePlaylist(playlistName: string) {
    const dialogRef = this.dialog.open(PlaylistModalComponent, {
      maxWidth: 'fit-content',
      minHeight: 'fit-content',
      data: { title: playlistName },
    });
  }

  editPlaylist(playlistName: string) {
    const dialogRef = this.dialog.open(PlaylistModalComponent, {
      maxWidth: 'fit-content',
      minHeight: 'fit-content',
      data: {
        title: playlistName,
        isEditing: this.isEditing,
      },
    });
  }
}
