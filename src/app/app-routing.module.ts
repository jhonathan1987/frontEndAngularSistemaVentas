import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonsComponent } from './components/persons/persons.component';
import { StateComponent } from './components/state/state.component';


const routes: Routes = [

  { path: 'persons', component: PersonsComponent },
  { path: 'add', component: FormComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'state', component: StateComponent },
  { path: ':id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
