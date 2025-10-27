import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './pages/shared/components/spinner/spinner';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SpinnerComponent
  ],
  templateUrl: './app.html'
})

export class AppComponent {
  protected readonly title = signal('SpotifySongs');
}
