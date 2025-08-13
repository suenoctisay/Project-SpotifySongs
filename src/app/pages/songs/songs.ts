import { Component } from '@angular/core';

import { HeaderCompoenent } from "../../core/main-layout/header/header";
import { BreadcrumbComponent } from '../../core/main-layout/breadcrumb/breadcrumb';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.html',
  styleUrl: './songs.scss',
  imports: [
    HeaderCompoenent,
    BreadcrumbComponent
  ],
})

export class SongsComponent { }
