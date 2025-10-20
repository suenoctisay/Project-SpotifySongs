import { Component } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';
import { SongsFiltersComponent } from "../songs-filters/songs-filters";
import { SongsTableComponent } from '../songs-table/songs-table';

// angular material components
import { MatExpansionModule } from '@angular/material/expansion';

// providers
import { provideNativeDateAdapter } from '@angular/material/core';


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

export class SongsHomeComponent {


}
