import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// app imports
import { FilterService } from './../../../shared/filter.service';
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
  filteredPlaylists = [...this.playlist];

  isEditing: boolean = true;

  constructor(
    private filterService: FilterService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFilteredPlaylists();
  }

  getFilteredPlaylists(): void {
    this.filterService.setValue().subscribe((saveValue) => {
      console.log('Received filter values:', saveValue);
      if (!saveValue || Object.values(saveValue).every((value) => !value)) {
        return;
      }

      this.filteredPlaylists = this.playlist.filter((playlist) => {
        const searchTerm = (saveValue.title || '') + (saveValue.creator || '') + (saveValue.genre || '');
        const combinedFields = playlist.title + playlist.creator + playlist.genre;
        return combinedFields.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }

  seeSongs(playlistName: string) {
    const dialogRef = this.dialog.open(PlaylistModalComponent, {
      maxWidth: 'fit-content',
      minHeight: 'fit-content',
      data: { title: playlistName },
    });
  }

  editSongs(playlistName: string) {
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
