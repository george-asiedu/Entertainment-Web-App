import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Login, Netflix } from '../model/netflix';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  private usersURL = 'http://localhost:3000/users'
  private appURL = 'http://localhost:3000/netflix'

  constructor(private http: HttpClient) { }

  postUsers(user: any): Observable<any> {
    return this.http.post<any>(this.usersURL, user)
  }

  userLogin(credentials: Login): Observable<any> {
    return this.http.post<any>(this.usersURL, credentials)
  }

  getMovies(): Observable<Netflix[]> {
    return this.http.get<Netflix[]>(this.appURL).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message)
    } else {
      console.error(
        `Status code ${error.status} ` + 
        `body was: ${error.error}` 
      )
    }
    return throwError(()=> 'Something went wrong 😔😔, please try again later.')
  }
}