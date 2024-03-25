import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetflixService {
  private usersURL = 'http://localhost:3000/users'
  private appURL = 'http://localhost:3000/netflix'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersURL).pipe(catchError(this.handleError))
  }

  getMovies(): Observable<any> {
    return this.http.get<any>(this.appURL).pipe(catchError(this.handleError))
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
