import { Component, OnInit } from '@angular/core';
import { AdminSignUpUserService } from 'src/app/services/signup/admin-sign-up-user.service';
import { NewUser } from '../../models/NewUser';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model : any = {}
  errors : Array<String> = [];
  success: boolean = false;
  
  constructor(
    private adminSignUpService: AdminSignUpUserService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.errors = [];

    let newUser = new NewUser();
    newUser.name = this.model.name;
    newUser.surnames = this.model.surnames;
    newUser.email = this.model.email;
    newUser.password = this.model.password;

    this.adminSignUpService.register(
      newUser
    ).subscribe(
      response => {
        this.success = true;
      },
      error => {
          let errorCode = error.error.errors.code;
          if(errorCode === 1049 || errorCode === 1050 || errorCode === 1051 || errorCode === 1052){
            console.log(error);
            alert("Tu sesion ha expirado, porfavor vuelve a ingresar.");
          }

          if(errorCode === 31){
            this.errors.push("El correo ingresado ya está en uso.");
          }
      }
    );
  }

  register(){
    
      }

}
