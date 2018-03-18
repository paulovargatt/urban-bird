import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [
    OfertasService
  ]
})
export class OndeFicaComponent implements OnInit {

  public OndeFica;

  constructor(private route: ActivatedRoute,
              private ofertasService: OfertasService) { }

  ngOnInit() {
    let idParent = this.route.parent.snapshot.params['id'];

    this.ofertasService.getOndeFica(idParent)
      .then((resposta: any) => {
        this.OndeFica = resposta
      })
  }

}
