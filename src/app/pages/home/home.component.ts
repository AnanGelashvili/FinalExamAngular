import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <h1>Welcome to Our Wikipedia-like Website</h1>
      <p>Browse articles and learn new things!</p>
      <nav>
  <a routerLink="/">Home</a>
  <a routerLink="/profile" *ngIf="authService.hasRole('user')">Profile</a>
  <a routerLink="/admin" *ngIf="authService.hasRole('admin')">Admin</a>
  </nav>
    </div>
  `
})
export class HomeComponent {}
