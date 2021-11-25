import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private router: Router) { }

  authentification(login: any, password: any) {
    if (login.indexOf("@") != -1 && password.length > 0) {
      sessionStorage.setItem("userEmail", login)
      this.router.navigate(["accueil"])
    } else {
      alert(`Vérifier le login et/ou le mot de passe saisies`)
    }
  }

  seDeconnecter() {
    if (sessionStorage.getItem("userEmail") != null) {
      sessionStorage.removeItem("userEmail")
      this.router.navigate(["login"])
    }
  }
}
