import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../ofertas.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit {

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

/*
    this.route.params.subscribe((param) => {
      console.log(param)
    },(error) => {
      console.log(error)
    },() => console.log('completeedd'))
  }
*/
/*
    let tempo = Observable.interval(5000)
    tempo.subscribe((interval) => {
      console.log(interval)
    })
    */


    let meuObservableTeste = Observable.create((observer) => {
      observer.next('primeiro evento')
    });

    meuObservableTeste.subscribe(
      (resul) => console.log(resul)
    )


  }
}
