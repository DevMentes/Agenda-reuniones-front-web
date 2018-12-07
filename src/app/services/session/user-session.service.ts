import { Injectable } from '@angular/core';
import { jwt_decode } from 'jwt-decode';

const TOKEN = 'Token';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  logOut(){
    localStorage.removeItem(TOKEN);
  }

  token(){
    return localStorage.getItem('Token');
  }

  isAdmin(){

    return true;
  }
}
