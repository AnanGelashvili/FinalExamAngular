import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule here
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div class="register">
      <h2>Create an Account</h2>
      <form (ngSubmit)="onRegister()">
        <label for="name">Full Name:</label>
        <input type="text" id="name" [(ngModel)]="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required />

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a routerLink="/login">Login here</a></p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule]  // Import FormsModule here
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      (response: any) => {
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        console.error('Registration failed', error);
      }
    );
  }
}
