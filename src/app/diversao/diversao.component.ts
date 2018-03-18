import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[
    OfertasService
  ]
})
export class DiversaoComponent implements OnInit {

  public ofertas;

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('diversao')
      .then(ofertas => {
        console.log(ofertas);
        this.ofertas = ofertas;
      });
  }

}
