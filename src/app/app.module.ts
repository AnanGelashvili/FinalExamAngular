import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for Angular functionality

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark as standalone
  imports: [CommonModule],  // Include CommonModule for the basic Angular features (like ngIf, ngFor)
})
export class AppComponent {
  title = 'Final';
}
