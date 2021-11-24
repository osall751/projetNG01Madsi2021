import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVous } from '../models/rendezvous';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  adresseMail: any
  tabRvs: Array<RendezVous> = [
    new RendezVous(0, "Sanar 1", "Aller au Restaurant", new Date("2021/11/24")),
    new RendezVous(1, "Dakar", "Cours de Dev web", new Date("2022/01/24")),
    new RendezVous(2, "Diourbel", "Entretien avec le Président", new Date("2022/07/24")),
    new RendezVous(3, "Bakhdad", "Visite Touristique", new Date("2021/12/12")),
    new RendezVous(4, "Nouakchott", "Travail sur le projet OMVS", new Date("2022/08/08")),
    new RendezVous(5, "Saint-Louis", "Aller au Restaurant", new Date("2022/01/04")),
  ]

  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.adresseMail = this.routeActive.snapshot.paramMap.get("email")
  }
}
