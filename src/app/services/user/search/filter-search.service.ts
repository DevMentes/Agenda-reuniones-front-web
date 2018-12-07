import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSessionService } from '../../session/user-session.service';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class FilterSearchService {

  readonly searchUri = 'http://localhost:8000/users/search/';

  users: User[];


  constructor(
    private http: HttpClient,
    private sessionService : UserSessionService
  ){}

  search(searchQuery: string){

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + this.sessionService.token()
      })
    }
    return this.http.get<any>(this.searchUri + searchQuery, httpOptions);
  }
}
