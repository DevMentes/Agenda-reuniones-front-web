import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserSessionService } from '../session/user-session.service';
import { User } from 'src/app/models/user';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AdminSignUpUserService {
  
  readonly registerUri = 'http://localhost:8000/admin/users/register';

  httpOptions;

  constructor(
    private userSession: UserSessionService,
    private http: HttpClient
  ) {}

   
  register(user: User){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + this.userSession.token()
      })
    }

    console.log(this.userSession.token());

    return this.http.post(this.registerUri, user, httpOptions)
  }
}
