import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';

// angular material components
import { MatExpansionModule } from '@angular/material/expansion';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SongsFiltersComponent } from "../songs-filters/songs-filters";
import { SongsTableComponent } from '../songs-table/songs-table';


@Component({
  selector: 'app-songs-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  providers: [provideNativeDateAdapter()],
  imports: [
    HeaderCompoenent,
    FooterComponent,
    BreadcrumbComponent,

    SongsFiltersComponent,
    SongsTableComponent,

    MatExpansionModule
  ],
})

export class SongsHomeComponent { }
