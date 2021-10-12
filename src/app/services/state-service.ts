import { Injectable } from '@angular/core';
import { State } from '../models/state.model';

import { DataServiceState } from './data-service-state';


@Injectable()
export class StateService {

  states: State[] = [];

  constructor(private dataServiceState: DataServiceState) { }



  setState(states: State[]) {
    this.states = states;
  }

  get() {
    return this.dataServiceState.find();
  }

  save(state: State) {
    console.log('estado a agregar:' + state.stateId);
    this.dataServiceState.save(state)
      .subscribe(
        (state: State) => {
          // Recuperamos objeto Persona con el idPersona recien agregado
          console.log('se agrega al arreglo el estado recien insertada suscriber:' + state.stateName);
          this.states.push(state);
        }
      );
  }


  delete(id: number) {
    console.log('eliminar estado con id:' + id);
    const index = this.states.findIndex(state => state.stateId == id); //encontramos el indice en el arreglo
    this.states.splice(index, 1);
    this.dataServiceState.delete(id);
  }

  find(id: number):any {
    const state: State | undefined = this.states.find(state => state.stateId == id);
    if (state) {
      console.log("id estado: " + state.stateId+ " nombre:" + state.stateName);
      return state;
    }else{
      return "error";
    }
    
    
  }

  update( state: State) {
    console.log("estado a modificar " + state.stateId);
    //  const personToUpdateLocate=this.persons.find(person=>person.id==1);
    //  personToUpdateLocate.id=person.id;
    this.dataServiceState.update(state);
  }
}
