import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// app imports
import { Playlist } from './../../interface/playlist.interface';
import { Playlist_Data } from './../../mock/playlist.mock';
import { AppService } from '../../../../core/services/app.service';
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
  readonly dialog = inject(MatDialog);

  playlist: Playlist[] = Playlist_Data;
  filteredPlaylists = [...this.playlist];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getFilteredPlaylists();
  }

  getFilteredPlaylists(): void {
    this.appService.setValue().subscribe((saveValue) => {
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

  openModal(): void {
    const dialogRef = this.dialog.open(PlaylistModalComponent, {
      maxWidth: 'fit-content',
      minHeight: 'fit-content',
    });

    dialogRef.afterClosed().subscribe(result => { });
  }

}
