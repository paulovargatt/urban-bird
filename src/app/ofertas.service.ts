import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Oferta} from './shared/oferta.model';
import 'rxjs/operator/toPromise';
import {API} from './app.api';


@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {

  }


  public getOfertas() {
    return this.http.get(API+'?destaque=true')
      .toPromise()
      .then((resposta: any) =>
        resposta
      );
  }

  public getOfertasCategoria(categoria: string){
    return this.http.get(`${API}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) =>
         resposta
      )
  }

  public getOfertaById(id){
    //shifit extrai posição do array;
    return this.http.get(`${API}/${id}`)
      .toPromise()
      .then((resposta: any) =>
        resposta
      );
  }


}
