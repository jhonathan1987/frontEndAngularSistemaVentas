import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/models/state.model';
import { StateService } from 'src/app/services/state-service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  states: State[] = [];

  constructor(private stateService: StateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.stateService.get()
      .subscribe(
        (stateGet: State[]) => {
          //cargamos los datos de persona obtenidos en el arreglo local
          this.states = stateGet;
          this.stateService.setState(this.states);
          console.log('states obtenidos del subscribe:' + this.states);
        }
      );
  }

  goAdd() {
    console.log('nos vamos a agregar');
    this.router.navigate(['/addState']);
  }

  delete(state: State) {
    if (state.stateId != null) {
      console.log('estado a eliminar:' + state.stateId);
      this.stateService.delete(state.stateId);
    }
    this.router.navigate(['states']);
  }
}
