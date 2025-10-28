import { Component, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// app imports
import { PlaylistModalComponent } from '../playlist-modal/playlist-modal';
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';

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
  @Input() searchedPlaylist: {
    title: string;
    creator: string;
    genre: string
  } = {
    title: '',
    creator: '',
    genre: '',
  };

  playlist: Playlist[] = Playlist_Data;
  filteredPlaylist = [...this.playlist];

  isEditing: boolean = true;

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.applyFilters();
  }

  // FILTER FUNCTION
  applyFilters(): void {
    this.filteredPlaylist = this.playlist.filter((playlist) => {
      const titleMatch = this.searchedPlaylist.title
        ? playlist.title.toLowerCase().includes(this.searchedPlaylist.title.toLowerCase())
        : true;
      const creatorMatch = this.searchedPlaylist.creator
        ? playlist.creator.toLowerCase().includes(this.searchedPlaylist.creator.toLowerCase())
        : true;
      const genreMatch = this.searchedPlaylist.genre
        ? playlist.genre.toLowerCase().includes(this.searchedPlaylist.genre.toLowerCase())
        : true;

      return titleMatch && creatorMatch && genreMatch;
    });
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
