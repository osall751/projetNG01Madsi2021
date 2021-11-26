import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RendezVous } from '../models/rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RvapiService {
  urlApi = environment.urlApi
  tabRvs: any = []
  httpOptions = {
    headers: new HttpHeaders(
      {
        "content-type": "application/json"
      }
    )
  }
  constructor(private http: HttpClient) { }

  getRvsFromApi() {
    this.http.get(this.urlApi + "rvs").subscribe((data: {}) => {
      this.tabRvs = data
    });
  }

  createNewRvAtAPI(rv: RendezVous) {
    this.http.post(
      this.urlApi + "rvs",
      { lieu: rv.lieu, description: rv.description, date: rv.date },
      this.httpOptions).subscribe((data: {}) => {
        this.getRvsFromApi()
      });
  }

  deleteRvAtAPI(id: any) {
    if (window.confirm("Voulez-vous rellement supprimer cet élément ?")) {
      this.http.delete(
        this.urlApi + "rvs/" + id,
        this.httpOptions).subscribe((data: {}) => {
          this.getRvsFromApi()
        });
    }
  }
}
