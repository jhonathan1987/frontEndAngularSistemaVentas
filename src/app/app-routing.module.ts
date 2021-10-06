import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PersonsComponent } from './components/persons/persons.component';


const routes: Routes = [
  { path: '', component: PersonsComponent },
  {
    path: 'persons', component: PersonsComponent, children: [
      //las rutas que necesite hijas
    ]
  },
  { path: 'add', component: FormComponent },
  { path: ':id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
