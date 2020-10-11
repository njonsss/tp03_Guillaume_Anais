import { Component, OnInit } from '@angular/core';
import {Produit} from '../models/Produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public model: Produit;
  public listeProduit: Produit[];

  constructor() {
    this.listeProduit = this.storage.get('Catalogue'); //recupération du catalogue courant pour récupérer le produit à afficher
    let myId = '';
    this.route.params.subscribe(params => {
      myId = params['id']; //récupération de l'indice du produit envoyé par l'url
    });

    this.model = this.listeProduit[myId]; //on définit le modèle avec l'indice du tableau du catalogue
    this.indexModel = myId;
  }

}
