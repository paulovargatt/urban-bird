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
  private tempoObservableSubscription:Subscription
  private meuObservableteste:Subscription


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

    let tempo = Observable.interval(500)


    this.tempoObservableSubscription = tempo.subscribe((interval) => {
      console.log(interval)
    })



    let meuObservableTeste = Observable.create((observer) => {
      observer.next(1)
      observer.next(3)
      observer.complete()
      observer.error('erro in events')
    });

    this.meuObservableteste = meuObservableTeste.subscribe(
      (resul) => console.log(resul),
      (error) => console.log(error),
      () => console.log('event finisg')
    )

  }


  ngOnDestroy() {
    this.tempoObservableSubscription.unsubscribe()
    this.tempoObservableSubscription.unsubscribe()
  }
}
