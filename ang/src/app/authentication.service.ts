import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap,catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http:HttpClient) { }

  signup(formdata : NgForm)
  {
    return this.http.post<any>(this.apiUrl,formdata).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    );
  }

  login(formdata : NgForm)
  {
    return this.http.post<any>(this.apiUrl,formdata).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    );
  }

}
