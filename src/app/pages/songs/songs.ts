import { Component } from '@angular/core';

import { HeaderCompoenent } from "../../core/main-layout/header/header";
import { FooterComponent } from '../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../core/main-layout/breadcrumb/breadcrumb';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.html',
  styleUrl: './songs.scss',
  imports: [
    HeaderCompoenent,
    FooterComponent,
    BreadcrumbComponent
  ],
})

export class SongsComponent { }
