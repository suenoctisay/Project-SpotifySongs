import { Component } from '@angular/core';

// angular material components
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
}
