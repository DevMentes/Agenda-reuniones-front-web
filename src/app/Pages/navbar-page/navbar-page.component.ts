import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/services/session/user-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit {

  constructor(
    private userSessionService: UserSessionService,
    private router: Router
  ) { }
  // Primero Metodo que se carga
  ngOnInit() {
    this.isAdmin();
  }

  logOut(){
    this.userSessionService.logOut();
    this.router.navigateByUrl('');
  }

  isAdmin(){
    return this.userSessionService.isAdmin();
  }
}
