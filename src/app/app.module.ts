import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ShowFuncComponent } from './funcionario/show-func/show-func.component';
import { AddEditFuncComponent } from './funcionario/add-edit-func/add-edit-func.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ShowcliComponent } from './cliente/show-cli/show-cli.component';
import { AddEditcliComponent } from './cliente/add-edit-cli/add-edit-cli.component';
import {SharedService}  from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ShowFuncComponent,
    AddEditFuncComponent,
    ClienteComponent,
    ShowcliComponent,
    AddEditcliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
