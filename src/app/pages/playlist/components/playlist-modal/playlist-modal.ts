import { Component, Inject, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Sort, MatSort, MatSortModule } from '@angular/material/sort';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

// app imports
import { SongsTable } from '../../../songs/interface/songs-table.interface';
import { Songs_Data } from '../../../songs/mock/songs-table.mock';


@Component({
  selector: 'app-playlist-modal',
  templateUrl: './playlist-modal.html',
  styleUrl: './playlist-modal.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
  ],
})

export class PlaylistModalComponent {
  readonly dialogRef = inject(MatDialogRef<PlaylistModalComponent>);

  isEditing: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<SongsTable>(Songs_Data);
  displayedColumns: string[] = [
    'artist',
    'song',
    'album',
    'year',
    'genre',
    'duration',
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public playlist: { title: string; isEditing: boolean },
  ) {
    this.isEditing = this.playlist.isEditing;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  close(): void {
    this.dialogRef.close();
  }

  // SORT FUNCTION
  sortSongs(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = new MatTableDataSource<SongsTable>(data);
      return;
    }

    this.dataSource = new MatTableDataSource<SongsTable>(data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'artist':
          return compare(a.artist, b.artist, isAsc);
        case 'song':
          return compare(a.song, b.song, isAsc);
        case 'album':
          return compare(a.album, b.album, isAsc);
        case 'year':
          return compare(a.year, b.year, isAsc);
        case 'genre':
          return compare(a.genre, b.genre, isAsc);
        case 'duration':
          return compare(a.duration, b.duration, isAsc);
        default:
          return 0;
      }
    }));
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
