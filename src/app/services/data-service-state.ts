import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../models/state.model';


@Injectable()
export class DataServiceState {

  constructor(private httpClient: HttpClient) { }

  urlBase = "http://localhost:8080/states";

  find(): Observable<any> {
    return this.httpClient.get(this.urlBase);
  }

  save(state: State): Observable<any> {
    return this.httpClient.post(this.urlBase, state);
  }

  update( state: State) {
    this.httpClient.put(this.urlBase, state)
      .subscribe(response => {
        console.log("resultado de modificar estado " + response)
      }, (error) => console.log("error en modificar p " + error)
      );
  }

  delete(id: number) {
    let url: string;
    url = this.urlBase + '/' + id;
    this.httpClient.delete(url)
      .subscribe(
        (response) => {
          console.log('resultado eliminar persona: ' + response);
        },
        (error) => console.log('Error en eliminar persona:' + error)
      );
  }
}
