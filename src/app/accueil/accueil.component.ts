import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../models/rendezvous';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RvapiService } from '../services/rvapi.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public get rvapiService(): RvapiService {
    return this._rvapiService;
  }
  adresseMail: any
  tabRvs: Array<RendezVous> = [
    new RendezVous(0, "Sanar 1", "Aller au Restaurant", new Date("2021/11/24 10:12")),
    new RendezVous(1, "Dakar", "Cours de Dev web", new Date("2022/01/24")),
    new RendezVous(2, "Diourbel", "Entretien avec le Président", new Date("2022/07/24")),
    new RendezVous(3, "Bakhdad", "Visite Touristique", new Date("2021/12/12")),
    new RendezVous(4, "Nouakchott", "Travail sur le projet OMVS", new Date("2022/08/08")),
    new RendezVous(5, "Saint-Louis", "Aller au Restaurant", new Date("2022/01/04"))
  ]

  closeResult = '';

  rv = new RendezVous(
    new Date().getTime() * Math.floor(Math.random() * 10000),
    "Université Gaston Berger de Saint-Louis",
    "La déclaration de Ousmane Sonko sur la non-signature de la charte de non-violence par son parti, a fait couler beaucoup d’encre depuis dimanche dernier. Et c'est d'ailleurs l'objet de son face à face avec la presse ce mercredi 24 novembre.",
    new Date()
  )

  constructor(private route: Router, private modalService: NgbModal,
    private _rvapiService: RvapiService) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // this.tabRvs = [this.rv, ...this.tabRvs]
      this.rvapiService.createNewRvAtAPI(this.rv)
      this.rv = new RendezVous(
        new Date().getTime() * Math.floor(Math.random() * 10000),
        "Université Gaston Berger de Saint-Louis",
        "La déclaration de Ousmane Sonko sur la non-signature de la charte de non-violence par son parti, a fait couler beaucoup d’encre depuis dimanche dernier. Et c'est d'ailleurs l'objet de son face à face avec la presse ce mercredi 24 novembre.",
        new Date()
      )
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  editerRV(content: any, rvToEdit: RendezVous) {
    this.rv = rvToEdit
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(this.rv);
      this.rvapiService.updateRvAtAPI(this.rv)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {
    if (sessionStorage.getItem("userEmail") != null) {
      this.adresseMail = sessionStorage.getItem("userEmail")
      this.rvapiService.getRvsFromApi()
    } else {
      this.route.navigate(["login"])
    }
  }

  deleteRV(id: any) {
    this.rvapiService.deleteRvAtAPI(id)
    // if (window.confirm("Voulez-vous rellement supprimer cet élément ?")) {
    //   this.tabRvs = this.tabRvs.filter((rv) => {
    //     return rv.id != id
    //   });
    // }
  }

}
