import { Component } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';
import { ArtistsFilterComponent } from "../artists-filter/artists-filter";
import { ArtistsGalleryComponent } from '../artists-gallery/artists-gallery';

// angular material components
import { MatExpansionModule } from '@angular/material/expansion';

// services
import { SpinnerService } from '../../../shared/services/spinner.service';

@Component({
  selector: 'app-artists-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    HeaderCompoenent,
    FooterComponent,
    BreadcrumbComponent,

    MatExpansionModule,

    ArtistsFilterComponent,
    ArtistsGalleryComponent
  ],
})

export class ArtistsHomeCompoenent {
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
