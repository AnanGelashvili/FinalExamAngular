import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

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
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe(response => {
        this.authService.saveToken(response.token);
      });
  }
}
