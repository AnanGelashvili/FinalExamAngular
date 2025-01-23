import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile">
      <h2>Welcome, {{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <button (click)="logout()">Logout</button>
    </div>
  `
})
export class ProfileComponent implements OnInit {
  user = { name: '', email: '' };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      (profile: any) => {
        this.user = profile;
      },
      (error: any) => {
        console.error('Failed to fetch user profile', error);
        // Handle error (e.g., redirect to login page)
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
