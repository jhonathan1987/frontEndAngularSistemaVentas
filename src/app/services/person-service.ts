import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Person } from '../models/person.model';

@Injectable()
export class PersonService {

  persons: Person[] = [];

  constructor(private dataService: DataService) { }



  setPersons(persons: Person[]) {
    this.persons = persons;
  }

  getPersons() {
    return this.dataService.loadPersons();
  }

  personAdd(person: Person) {
    console.log('persona a agregar:' + person.name);
    this.dataService.personAdd(person)
      .subscribe(
        (person: Person) => {
          // Recuperamos objeto Persona con el idPersona recien agregado
          console.log('se agrega al arreglo la persona recien insertada suscriber:' + person.id);
          this.persons.push(person);
        }
      );
  }


  deletePerson(id: number) {
    console.log('eliminar persona con id:' + id);
    const index = this.persons.findIndex(person => person.id == id); //encontramos el indice en el arreglo
    this.persons.splice(index, 1);
    this.dataService.deletePerson(id);
  }

  findPerson(id: number):any {
    const person: Person | undefined = this.persons.find(person => person.id == id);
    if (person) {
      console.log("id persona: " + person.id + " nombre:" + person.name);
      return person;
    }else{
      return "error";
    }
    
    
  }

  personUpdate( person: Person) {
    console.log("persona a modificar " + person.id);
    //  const personToUpdateLocate=this.persons.find(person=>person.id==1);
    //  personToUpdateLocate.id=person.id;
    this.dataService.personUpdate(person);
  }
}
