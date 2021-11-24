import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public get serviceAuth(): AuthentificationService {
    return this._serviceAuth;
  }

  login = "os@gmail.com"
  password = "passer123"
  src = "https://i.gaw.to/vehicles/photos/40/23/402332-2021-mercedes-benz-s-class.jpg"

  // authentification() {
  //   if (this.login.indexOf("@") != -1 && this.password.length > 0) {
  //     this.router.navigate(["accueil", this.login])
  //   } else {
  //     alert(`Vérifier le login et/ou le mot de passe saisies`)
  //   }
  // }
  constructor(private _serviceAuth: AuthentificationService) { }

  ngOnInit(): void {
  }

}
