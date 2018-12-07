import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserSessionService} from '../../services/session/user-session.service';
import { SignInService } from 'src/app/services/user/signin/sign-in.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model : any = {}

  errors: Array<String> = [];

  constructor(
    private signInService: SignInService,
    private router: Router,
    private userSession : UserSessionService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.errors = [];
    this.signInService.signIn(
      this.model.email,
      this.model.password
    ).subscribe(
      response => {
        console.log("en login");
        console.log(response);
        this.userSession.setToken(response.data.token);
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error);
        if(error.error.errors.code === 29){
          this.errors.push("El correo ingresado no se encuentra registrado.");        
          return;
        }
        if(error.error.errors.code === 30){
          this.errors.push("Las credenciales ingresadas son incorrectas.");        
          return;
        }
        });
      }
}
