import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Sort, MatSort, MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';

// app imports
import { SongsTable } from '../../interface/songs-table.interface';
import { Songs_Data } from '../../mock/songs-table.mock';
import { SongsModalCompoent } from '../songs-modal/songs-modal';

// services
import { FilterService } from '../../../shared/services/filter.service';


@Component({
  selector: 'app-songs-table',
  templateUrl: './songs-table.html',
  styleUrl: './songs-table.scss',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
  ],
})

export class SongsTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  readonly dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<SongsTable>(Songs_Data);
  displayedColumns: string[] = [
    'artist',
    'song',
    'album',
    'year',
    'genre',
    'duration',
    'actions',
  ];

  constructor(
    private filterService: FilterService
  ) {
    this.dataSource.data = this.dataSource.data.slice();
  }

  ngOnInit(): void {
    this.getFilteredSongs();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // ESSENCIAL FUNCTIONS
  addNewSong(): void {
    const dialogRef = this.dialog.open(SongsModalCompoent, {});

    dialogRef.afterClosed().subscribe((newSong) => {
      if (newSong) {
        Songs_Data.push(newSong);
        this.dataSource = new MatTableDataSource<SongsTable>([...Songs_Data]);
      }
    });
  }

  editSong(song: any): void {
    const dialogRef = this.dialog.open(SongsModalCompoent, {
      data: song,
    });

    dialogRef.afterClosed().subscribe((updateSong) => {
      if (updateSong) {
        const index = Songs_Data.findIndex((s) => s === song);
        if (index !== -1) {
          Songs_Data[index] = updateSong;
          this.dataSource = new MatTableDataSource<SongsTable>([...Songs_Data]);
        }
      }
    });
  }

  deleteSong(song: any): void {
    const index = Songs_Data.findIndex((s) => s === song);
    if (index !== -1) {
      Songs_Data.splice(index, 1);
      this.dataSource = new MatTableDataSource<SongsTable>([...Songs_Data]);
    }
  }

  // FILTER FUNCTION
  getFilteredSongs(): void {
    this.filterService.getValue().subscribe((saveValue) => {
      if (!saveValue) {
        this.dataSource = new MatTableDataSource<SongsTable>([...Songs_Data]);
        return;
      }

      this.dataSource = new MatTableDataSource<SongsTable>(Songs_Data.filter((song) => {
        const matchesArtist = saveValue.artist
          ? song.artist.toLowerCase().includes(saveValue.artist.toLowerCase())
          : true;
        const matchesSong = saveValue.song
          ? song.song.toLowerCase().includes(saveValue.song.toLowerCase())
          : true;
        const matchesAlbum = saveValue.album
          ? song.album.toLowerCase().includes(saveValue.album.toLowerCase())
          : true;

        return matchesArtist && matchesSong && matchesAlbum;
      }));
      this.dataSource.paginator = this.paginator
    });
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
    this.dataSource.paginator = this.paginator
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
