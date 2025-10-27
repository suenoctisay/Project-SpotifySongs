import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// angular material imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// services
import { SpinnerService } from '../../services/spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
})

export class SpinnerComponent {
  isLoading: Observable<boolean>;

  constructor(
    private spinnerService: SpinnerService,
  ) {
    this.isLoading = this.spinnerService.spinner$;
  }

}
