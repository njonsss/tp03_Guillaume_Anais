import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ProduitComponent } from './produit/produit.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, FormComponent, ProduitComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
