import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent {

  constructor(
    private router: Router,
  ) {  }

  // songs
  redirectToSongs() {
    this.router.navigate(['/home/songs']);
  }
}
