import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  
  readonly signinUri = 'http://localhost:8000/signin';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  signIn(email: String, password: String): Observable<any>{
    let credentials = {
      'email': email,
      'password': password
    };
    let response = this.http.post<any>(this.signinUri, credentials, this.httpOptions);
    
    return response;
  
  }
}
