import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, MatRippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'leap-year-check-angular';

  year = signal<number | null>(null);
  result = signal<string>('');

  checkLeapYear(): void {
    const y = this.year();
    if (y === null) return;

    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      this.result.set(`${y} is a Leap Year!`);
    } else {
      this.result.set(`${y} is NOT a Leap Year.`);
    }
  }
}
