import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data-service';
import { PersonService } from './services/person-service';
import { PersonsComponent } from './components/persons/persons.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { ProdutsComponent } from './components/produts/produts.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    UsersComponent,
    ProdutsComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,




  ],
  providers: [PersonService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
