import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../ofertas.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  oferta;

  constructor(private route: ActivatedRoute,
              public ofertasService: OfertasService) {
  }



  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.ofertasService.getOfertaById(id)
      .then((oferta) => {
        this.oferta = oferta
      });

  }

  ngOnDestroy() {

  }
}
