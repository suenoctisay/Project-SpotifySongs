import { red } from './../../../../node_modules/@colors/colors/index.d';
import { Component } from '@angular/core';

// angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    MatCardModule,
    MatIcon,
    MatButton
  ],
})

export class HomeComponent {

  redirectToSongs() {
    window.location.href = '/songs';
  }
}
