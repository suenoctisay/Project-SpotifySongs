import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

// app components
import { HeaderCompoenent } from "./header/header";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderCompoenent
  ],
})

export class MainLayoutComponent implements OnInit {
  isHomeRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }
}