import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

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
        throw error;
      })
    );
  }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.userApiUrl, data).pipe(
      catchError((error) => {
        console.error('Registration error', error);
        throw error;
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
    return !!this.getToken();
  }

  
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    }
    return null;
  }

  
  getUserRole(): string | null {
    const decodedToken = this.decodeToken();
    return decodedToken ? decodedToken.role : null;
  }

  
  hasRole(role: string): boolean {
    return this.getUserRole() === role;
  }
}
