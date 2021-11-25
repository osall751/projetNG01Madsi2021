import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationService } from './services/authentification.service';
import { HttpClientModule } from "@angular/common/http";
import { RvapiService } from './services/rvapi.service';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthentificationService, RvapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
