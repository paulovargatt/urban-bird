import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[
    OfertasService
  ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar

  constructor(private route: ActivatedRoute,
              public ofertasService: OfertasService) { }

  ngOnInit() {
    let idParent = this.route.parent.snapshot.params['id'];

    this.ofertasService.getComoUsarByID(idParent)
      .then((resposta: any) => {
        this.comoUsar = resposta
      })
  }

}
