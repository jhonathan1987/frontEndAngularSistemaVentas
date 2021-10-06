import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ["./persons.component.css"]
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.personService.getPersons()
      .subscribe(
        (personasObtenidas: Person[]) => {
          //cargamos los datos de persona obtenidos en el arreglo local
          this.persons = personasObtenidas;
          this.personService.setPersons(this.persons);
          console.log('personas obtenidas del subscriber:' + this.persons);
        }
      );


  }



  goAdd() {

    console.log('nos vamos a agregar');
    this.router.navigate(['/add']);
  }

  deletePerson(person: Person) {
    if (person.id != null) {
      console.log('persona a eliminar:' + person.id);
      this.personService.deletePerson(person.id);
    }
    this.router.navigate(['persons']);
  }

}
