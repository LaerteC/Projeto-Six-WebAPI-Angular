import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ClienteComponent} from './cliente/cliente.component';
import{FuncionarioComponent} from './funcionario/funcionario.component';




const routes: Routes = [

  {path:'cliente',component:ClienteComponent},
  {path:'funcionario',component:FuncionarioComponent}  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
