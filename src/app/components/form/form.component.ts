import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;

  constructor(private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    if (this.id != null) {
      const person = this.personService.findPerson(this.id);
      this.name = person.name;
      this.lastName = person.lastName;
      this.email = person.email;
      this.phone = person.phone;
      this.address = person.address;

    }



  }

  personSave() {
    const personToSave = new Person(this.id, this.name, this.lastName, this.email, this.phone, this.address);
   
    if (this.id != null) {
      this.personService.personUpdate(personToSave);
    }
    else {
      this.personService.personAdd(personToSave);
    }
    this.router.navigate(['persons']);
  }

}
