import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:5000/api";
  readonly FotoUrl="http://localhost:5000/fotos/";
 
  constructor(private http:HttpClient) { }


  
  // FUNCIONARIOS

  getFuncList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Funcionario/');

  }

  addFuncionario(val:any){
    return this.http.post(this.APIUrl+'/Funcionario/',val);
  }

  updateFuncionario(val:any){
    return this.http.put(this.APIUrl+'/Funcionario/',val);
  }

 deleteFuncionario(val:any){
    return this.http.delete(this.APIUrl+'/Funcionario/'+val);
  }


  // CLIENTES


  getClienList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Cliente/');

  }

  addCliente(val:any){
    return this.http.post(this.APIUrl+'/Cliente/',val);
  }

  updateCliente(val:any){
    return this.http.put(this.APIUrl+'/Cliente/',val);
  }

 deleteCliente(val:any){
    return this.http.delete(this.APIUrl+'/Cliente/'+val);
  }

  UploadFoto(val:any){
    return this.http.post(this.APIUrl+'/Cliente/SaveFile/',val);
  }
    
  getAllFuncionariosNomes():Observable<any[]>{

    return this.http.get<any[]>(this.APIUrl+'/Cliente/GetAllFuncionariosNomes/');
  }
}
