import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/users'; // User API URL

  constructor(private http: HttpClient) {}

  // Fetch all users (as is, no change needed)
  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch a user by ID (as is, no change needed)
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Fetch user profile (requires Authorization header)
  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (token) {
      return this.http.get(`${this.apiUrl}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the Authorization header
        },
      });
    } else {
      throw new Error('No token found'); // If no token is available, throw an error
    }
  }

  // Update a user's profile (modify as necessary depending on the API)
  updateUserProfile(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete a user (as is, no change needed)
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
