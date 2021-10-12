import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';


@Injectable()
export class DataServicePerson {

  constructor(private httpClient: HttpClient) { }

  urlBase = "http://localhost:8080/persons";

  loadPersons(): Observable<any> {
    return this.httpClient.get(this.urlBase);
  }

  personAdd(person: Person): Observable<any> {
    return this.httpClient.post(this.urlBase, person);
  }

  personUpdate( person: Person) {
    this.httpClient.put(this.urlBase, person)
      .subscribe(response => {
        console.log("resultado de modificar persona " + response)
      }, (error) => console.log("error en modificar persona " + error)
      );
  }

  deletePerson(id: number) {
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
