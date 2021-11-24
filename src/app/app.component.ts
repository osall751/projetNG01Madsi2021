import { Component } from '@angular/core';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titre de ma page web';

  constructor(private _serviceAuth: AuthentificationService) { }

  public get serviceAuth(): AuthentificationService {
    return this._serviceAuth;
  }

}
