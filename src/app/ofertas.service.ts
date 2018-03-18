import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Oferta} from './shared/oferta.model';
import 'rxjs/operator/toPromise';

@Injectable()
export class OfertasService {


  constructor(private http: HttpClient) {

  }


  public getOfertas() {
    return this.http.get('http://localhost:3000/ofertas?destaque=true')
      .toPromise()
      .then((resposta: any) =>
        resposta
      );
  }

  public getOfertasCategoria(categoria: string){
    return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) =>
         resposta
      )
;  }

}
