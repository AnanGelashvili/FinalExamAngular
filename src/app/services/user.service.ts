import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users'; // User API URL

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching users', error);
        throw error;      })
    );
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching user by ID', error);
        throw error;       })
    );
  }

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token'); 

    if (token) {
      return this.http.get(`${this.apiUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
      }).pipe(
        catchError((error) => {
          console.error('Failed to fetch profile', error);
          throw error; 
        })
      );
    } else {
      throw new Error('No token found'); // If no token is available, throw an error
    }
  }

  updateUserProfile(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError((error) => {
        console.error('Error updating profile', error);
        throw error;      })
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error deleting user', error);
        throw error;       })
    );
  }
}
