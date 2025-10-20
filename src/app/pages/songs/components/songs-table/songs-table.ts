import { Component, OnInit } from '@angular/core';

// angular material imports
import {MatTableModule} from '@angular/material/table';

// app imports
import { SongsTable } from '../../interface/songs-table.interface';
import { MatButtonModule } from '@angular/material/button';

// services
import { AppService } from '../../../../core/services/app.service';

// data source for the table
const Songs_Data: SongsTable[] = [
  {
    artist: 'Selena Gomez',
    song: 'Hands to Myself',
    album: 'Revival',
    year: 2015,
    genre: 'Pop',
    duration: '3:20',
  },
  {
    artist: 'Melanie Martinez',
    song: 'Dollhouse',
    album: 'Dollhouse',
    year: 2014,
    genre: 'Pop',
    duration: '3:51',
  },
  {
    artist: 'Ashley Johnson, Chris Rondinella',
    song: 'Take on Me',
    album: 'The Last of Us Part II',
    year: 2020,
    genre: 'Game Soundtrack',
    duration: '3:52',
  },
  {
    artist: 'Astro',
    song: 'Knock',
    album: 'Gateway',
    year: 2020,
    genre: 'K-Pop',
    duration: '3:13',
  },
  {
    artist: 'Bahari',
    song: 'Savage',
    album: 'Savage',
    year: 2018,
    genre: 'Pop',
    duration: '2:44',
  },
  {
    artist: 'Blackpink',
    song: 'As If It’s Your Last',
    album: 'As If It’s Your Last',
    year: 2017,
    genre: 'K-Pop',
    duration: '3:33',
  },
  {
    artist: 'Baby Tate',
    song: 'Hey, Mickey!',
    album: 'Hey, Mickey!',
    year: 2016,
    genre: 'Pop',
    duration: '1:56',
  },
  {
    artist: 'Chase Atlantic',
    song: 'Friends',
    album: 'Nostalgia',
    year: 2015,
    genre: 'Pop',
    duration: '3:50',
  },
  {
    artist: 'Elley Duhé',
    song: 'Middle of the Night',
    album: 'Middle of the Night',
    year: 2020,
    genre: 'Pop',
    duration: '3:04',
  },
  {
    artist: 'Lorde',
    song: 'Royals',
    album: 'Pure Heroine',
    year: 2013,
    genre: 'Pop',
    duration: '3:10',
  },
  {
    artist: 'Olivia Rodrigo',
    song: 'favorite crime',
    album: 'sour',
    year: 2021,
    genre: 'Pop',
    duration: '2:32',
  },
];

@Component({
  selector: 'app-songs-table',
  templateUrl: './songs-table.html',
  styleUrl: './songs-table.scss',
  imports: [
    MatTableModule,
    MatButtonModule
  ],
})

export class SongsTableComponent {
  displayedColumns: string[] = [
    'artist',
    'song',
    'album',
    'year',
    'genre',
    'duration',
  ];

  dataSource: SongsTable[] = Songs_Data;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getFilteredSongs();
  }

  addNewSong() {
    console.log('Add New Song button clicked');
  }

  getFilteredSongs(): void {
    this.appService.setSongs().subscribe((saveValue) => {
      if (!saveValue) {
        this.dataSource = Songs_Data;
        return;
      }

      this.dataSource = Songs_Data.filter((song) => {
        const searchTerm = (saveValue.artist || '') + (saveValue.song || '') + (saveValue.album || '');
        const combinedFields = song.artist + song.song + song.album;
        return combinedFields.toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }

}


