import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private router: Router) { }

  authentification(login: any, password: any) {
    if (login.indexOf("@") != -1 && password.length > 0) {
      this.router.navigate(["accueil", login])
    } else {
      alert(`Vérifier le login et/ou le mot de passe saisies`)
    }
  }
}
