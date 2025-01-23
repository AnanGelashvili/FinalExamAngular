import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule]  // Make sure RouterModule is imported here
})
export class AppComponent {
  title = 'Final';
}
