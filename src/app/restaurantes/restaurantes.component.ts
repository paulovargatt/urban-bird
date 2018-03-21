import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [
    OfertasService
  ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas;
  public dataTeste = new Date(2018,3,30);

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('restaurante')
      .then(ofertas => {
        console.log(ofertas);
        this.ofertas = ofertas;
      });
  }

}
