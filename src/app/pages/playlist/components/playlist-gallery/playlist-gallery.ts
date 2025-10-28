import { PlaylistFilterComponent } from './../playlist-filter/playlist-filter';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// app imports
import { FilterService } from '../../../shared/services/filter.service';
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';
import { PlaylistModalComponent } from '../playlist-modal/playlist-modal';

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
  filteredPlaylist = [...this.playlist];

  isEditing: boolean = true;

  constructor(
    private filterService: FilterService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getFilteredSongs();
  }

  // FILTER FUNCTION
  getFilteredSongs(): void {
    this.filterService.setValue().subscribe((saveValue) => {
      console.log('Filter Values:', saveValue);
      if (!saveValue || (!saveValue.title && !saveValue.creator && !saveValue.genre)) {
        this.filteredPlaylist = [...this.playlist];
        console.log('No filter applied, showing all playlists.');
        return;
      }

      this.filteredPlaylist = this.playlist.filter((playlist) => {
        console.log('Filtered Playlist:', this.filteredPlaylist);
        const titleMatch = saveValue.title ? playlist.title.toLowerCase().includes(saveValue.title.toLowerCase()) : true;
        console.log('Title Match:', titleMatch);
        const creatorMatch = saveValue.creator ? playlist.creator.toLowerCase().includes(saveValue.creator.toLowerCase()) : true;
        console.log('Creator Match:', creatorMatch);
        const genreMatch = saveValue.genre ? playlist.genre.toLowerCase().includes(saveValue.genre.toLowerCase()) : true;
        console.log('Genre Match:', genreMatch);
        return titleMatch && creatorMatch && genreMatch;
      });
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
