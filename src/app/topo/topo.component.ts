import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import '../util/rxjs'
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
  public ofertas2 = [];
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000) //executa apos 1 segundo o swit
      .distinctUntilChanged() //Verifica se o termo de pesquisa é diferente da anterior
      .switchMap((termo) => {
        console.log(termo)
        if(termo.trim() === '') {
          return Observable.of<any>([]) //array Observer Vazio
        }
        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((error:any) => {
        console.log(error)
        return Observable.of<any[]>([]);
      });

    this.ofertas.subscribe((ofertas) => {
      console.log(ofertas)
      this.ofertas2 = ofertas
    });
  }

  pesquisa(termodaBusca) {
    console.log('caracter', termodaBusca)
  this.subjectPesquisa.next(termodaBusca)
   // console.log((<HTMLInputElement>event.target).value);
  }

}
