import { Injectable } from '@angular/core';
// @ts-ignore
import {Subject} from 'rxjs/Subject';
import {Produit} from './models/Produit';

@Injectable()
export class ProduitService {
  //observable
  private Produit = new Subject<Produit>();

  constructor() { }
}
