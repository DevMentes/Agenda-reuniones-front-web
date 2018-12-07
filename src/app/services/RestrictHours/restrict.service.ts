import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from '../session/user-session.service';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestrictService {

  readonly restrictUri = 'http://localhost:8000/agenda/restricts';

  constructor(
    private http: HttpClient,
    private sessionService : UserSessionService
  ) { }

  restrict(days: string [],startAt: string, finishAt:string){
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.sessionService.token()
      })
    }

    let body = {
      'weekdays': days,
      'startAt': startAt,
      'finishAt':finishAt
    }
    console.log('body before to send');
    console.log(body);
    return this.http.post(this.restrictUri, body, httpOptions)
    .pipe<any[]>(
      map((response)=>{
        return response;
      }),
      catchError( error => {
        alert(error);
        return throwError( 'Something went wrong!' );
      })
    );
  }


}
