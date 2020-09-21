import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import {IRockRoll} from './rockroll'


@Injectable({
  providedIn: 'root'
})
export class RockrollService {

  private productUrl = 'api/rocknroll/rocknroll.json';
   
  constructor(private http: HttpClient){}

  getProducts(): Observable<IRockRoll[]>{

    return this.http.get<IRockRoll[]>(this.productUrl).pipe (
      tap(data => console.log('All:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
   
  }
  private handleError(err:HttpErrorResponse){
    let errorMessage='';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
