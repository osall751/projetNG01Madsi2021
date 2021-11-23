import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  adresseMail: any
  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.adresseMail = this.routeActive.snapshot.paramMap.get("email")
  }
}
