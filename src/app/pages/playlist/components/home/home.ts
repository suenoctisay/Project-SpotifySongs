import { Component } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';
import { PlaylistGalleryComponent } from "../playlist-gallery/playlist-gallery";
import { PlaylistFilterComponent } from '../playlist-filter/playlist-filter';

// angular material components
import { MatExpansionModule } from '@angular/material/expansion';

// services
import { SpinnerService } from '../../../shared/services/spinner.service';


@Component({
  selector: 'app-playlist-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    HeaderCompoenent,
    FooterComponent,
    BreadcrumbComponent,

    PlaylistGalleryComponent,
    PlaylistFilterComponent,

    MatExpansionModule,
  ],
})

export class PlaylistHomeComponent {
  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }

}
