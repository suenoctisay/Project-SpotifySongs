import { Component } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';
import { PlaylistGalleryComponent } from "../playlist-gallery/playlist-gallery";
import { PlaylistFilterComponent } from '../playlist-filter/playlist-filter';

// angular material components
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-playlist-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    HeaderCompoenent,
    FooterComponent,
    BreadcrumbComponent,
    MatExpansionModule,
    PlaylistGalleryComponent,
    PlaylistFilterComponent,
],
})

export class PlaylistHomeComponent { }
