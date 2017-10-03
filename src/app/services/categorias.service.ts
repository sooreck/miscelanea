import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Categoria } from '../models/categoria';

@Injectable()
export class CategoriasService {
    public url: string;
    data: any = null;
    identity;
    token;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }
      agregarCategoria(categoriaa) {
        const params = JSON.stringify(categoriaa);
        console.log(params);
        const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
        return this._http.post('http://192.168.0.42:8080/' + 'categoria/insertar/', params, {headers: headers})
                         .map(res => res.json());
      }
      getCategorias() {
        return this._http.get(this.url + 'categoria/leer/')
                         .map((res: Response) => res.json());
      }
}