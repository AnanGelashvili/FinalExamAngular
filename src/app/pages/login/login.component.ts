import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login">
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a routerLink="/register">Register here</a></p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule]  })
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response: any) => {
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/profile']);
      },
      (error: any) => {
        console.error('Login failed', error);
      }
    );
  }
}
