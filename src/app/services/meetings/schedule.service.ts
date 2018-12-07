import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from '../session/user-session.service';
import { UserAvailability } from 'src/app/Pages/ScheduleMeeting/user-availability/UserAvailability';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  readonly scheduleUri = 'http://localhost:8000/agenda/schedule';

  constructor(
    private http: HttpClient,
    private sessionService : UserSessionService
  ) { }

  schedule(users: UserAvailability[], date:string, startAt: string, finishAt:string){
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.sessionService.token()
      })
    }

    let body = {
      'guestUsers': users,
      'date': date,
      'startAt': startAt,
      'finishAt':finishAt
    }
    console.log('body before to send');
    console.log(body);
    return this.http.post(this.scheduleUri, body, httpOptions)
    .pipe<any[]>(
      map((response)=>{
        return response;
      }),
      catchError( error => {
        return throwError( 'Something went wrong!' )
      })
    );
  }
}
