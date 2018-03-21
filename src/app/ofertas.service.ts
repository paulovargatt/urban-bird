import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Oferta} from './shared/oferta.model';
import 'rxjs/operator/toPromise';
import 'rxjs/operator/map';
import 'rxjs/operator/retry';
import {API} from './app.api';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {

  }


  public getOfertas() {
    return this.http.get(API+'/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) =>
        resposta
      );
  }

  public getOfertasCategoria(categoria: string){
    return this.http.get(`${API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) =>
         resposta
      )
  }

  public getOfertaById(id){
    //shifit extrai posição do array;
    return this.http.get(`${API}/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) =>
        resposta
      );
  }

  public getComoUsarByID(id){
    return this.http.get(API+'/como-usar?id='+id)
      .toPromise()
      .then((resposta: any) => {
        return resposta[0].descricao
      });
  }

  public getOndeFica(id){
    return this.http.get(API+'/onde-fica?id='+id)
      .toPromise()
      .then((resposta: any) => {
        console.log(resposta)
        return resposta[0].descricao
      });
  }


  pesquisaOfertas(termo): Observable<any>{
    return this.http.get(`${API}/ofertas?descricao_oferta_like=${termo}`)
      .retry(10)
      .map((resposta: any) => resposta)
  }

}
