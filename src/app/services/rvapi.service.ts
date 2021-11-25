import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RendezVous } from '../models/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RvapiService {
  urlApi = environment.urlApi
  tabRvs: any = []
  constructor(private http: HttpClient) { }

  getRvsFromApi() {
    this.http.get(this.urlApi + "rvs").subscribe((data: {}) => {
      this.tabRvs = data
    });
  }
}
