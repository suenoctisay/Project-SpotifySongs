import { Component } from '@angular/core';

import { HeaderCompoenent } from "../../core/main-layout/header/header";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.html',
  styleUrl: './songs.scss',
  imports: [
    HeaderCompoenent
  ],
})

export class SongsComponent { }
