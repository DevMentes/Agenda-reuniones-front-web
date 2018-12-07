import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from '../session/user-session.service';
import { map, catchError } from 'rxjs/operators';
import { UserAvailability } from 'src/app/Pages/ScheduleMeeting/user-availability/UserAvailability';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class VerifyAvailabilitiesService {

  readonly verifyAvailabilitiesUri = 'http://localhost:8000/agenda/availability/verify';

  constructor(
    private http: HttpClient,
    private userSessionService: UserSessionService
  ) { }

  verify(users: User[], date:string, startAt:string, finishAt:string){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + this.userSessionService.token()
      })
    }

    let body = {
      'users': users,
      'date':date,
      'startAt':startAt,
      'finishAt': finishAt
    }
    console.log('body to send')
    console.log(body);
    return this.http.post<any>(this.verifyAvailabilitiesUri,body,httpOptions);
  }
}
