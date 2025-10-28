import { Component } from '@angular/core';

// angular material components
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
})

export class HeaderCompoenent {

  redirectToHome() {
    window.location.href = '/home';
  }

  redirectToSongs() {
    window.location.href = '/songs';
  }

  redirectToPlaylist() {
    window.location.href = '/playlist';
  }

  redirectToArtists() {
    window.location.href = '/artists';
  }
}
