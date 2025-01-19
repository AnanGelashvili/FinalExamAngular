import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

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

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(profile => {
        this.user = profile;
      });
  }

  logout() {
    this.authService.logout();
  }
}
