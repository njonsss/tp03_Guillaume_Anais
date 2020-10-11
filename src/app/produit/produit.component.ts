import { Component, OnInit } from '@angular/core';
import {Produit} from '../models/Produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent{
  public model: Produit;
  public listeProduit: Produit[];

  constructor() {

  }

}
