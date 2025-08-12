import { Component } from '@angular/core';

// angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatIcon,
    MatButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class HomeComponent { }
