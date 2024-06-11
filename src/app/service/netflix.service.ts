import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Login, Netflix } from '../model/netflix';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  private usersURL = 'http://localhost:3000/users'
  private appURL = 'http://localhost:3000/data'

  constructor(private http: HttpClient) { }

  postUsers(user: any): Observable<any> {
    return this.http.post<any>(this.usersURL, user)
  }

  userLogin(credentials: Login): Observable<any> {
    return this.http.post<any>(this.usersURL, credentials)
  }

  getMovies(): Observable<Netflix[]> {
    return this.http.get<Netflix[]>(this.appURL)
  }

  addToBookmark(addItem: Netflix): Observable<Netflix[]> {
    return this.http.put<Netflix[]>(`${this.appURL}/${addItem.id}`, addItem)      
  }
}