import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<any>;

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
  }

  pesquisa(termodaBusca) {
    console.log(termodaBusca)
    this.ofertas = this.ofertasService.pesquisaOfertas(termodaBusca);


    this.ofertas.subscribe(
      (ofertas) => console.log(ofertas),
      (error) => console.log(error),
      () => console.log('complet')
    )
   // console.log((<HTMLInputElement>event.target).value);
  }

}
