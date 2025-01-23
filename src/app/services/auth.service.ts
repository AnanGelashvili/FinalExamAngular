import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApiUrl = 'https://api.escuelajs.co/api/v1/auth/login'; // JWT Authentication API
  private userApiUrl = 'https://api.escuelajs.co/api/v1/users'; // User API

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.authApiUrl, credentials).pipe(
      catchError((error) => {
        console.error('Login error', error);
        throw error; // Return the error to be handled in the component
      })
    );
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.userApiUrl, data).pipe(
      catchError((error) => {
        console.error('Registration error', error);
        throw error; // Return the error to be handled in the component
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    // In a real-world application, you should check the token's validity (expiry date, etc.)
    return !!this.getToken();
  }
}
