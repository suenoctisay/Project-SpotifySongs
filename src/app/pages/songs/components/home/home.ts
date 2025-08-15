import { ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';

// app components
import { HeaderCompoenent } from '../../../../core/main-layout/header/header';
import { FooterComponent } from '../../../../core/main-layout/footer/footer';
import { BreadcrumbComponent } from '../../../../core/main-layout/breadcrumb/breadcrumb';

// angular material components
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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

    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})

export class SongsHomeComponent { }
