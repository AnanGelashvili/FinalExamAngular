import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <h1>Welcome to Our Wikipedia-like Website</h1>
      <p>Browse articles and learn new things!</p>
      <nav>
        <a routerLink="/login">Login</a>
        <a routerLink="/register">Register</a>
      </nav>
    </div>
  `
})
export class HomeComponent {}
