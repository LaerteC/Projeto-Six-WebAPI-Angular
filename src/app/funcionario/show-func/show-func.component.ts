import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-func',
  templateUrl: './show-func.component.html',
  styleUrls: ['./show-func.component.css']
})
export class ShowFuncComponent implements OnInit {

  constructor(private service:SharedService) { }

   FuncionarioList:any=[];

   ModalTitulo!:string;

   ActivateAddEditFuncComp:boolean=false;

   func:any;

  FuncionarioIdFilter:string="";
  NomeFuncionarioFilter:string="";
  FuncionarioListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshFuncList();
  }

  adicionarClick(){
    this.func={
      FuncionarioId:0,
      NomeFuncionario:""
    }
    this.ModalTitulo=" Adicionar Funcionário ";
    this.ActivateAddEditFuncComp=true;
     
  }

  editClick(item){
  this.func=item;
  this.ModalTitulo=" Editar Funcionários"
  this.ActivateAddEditFuncComp=true;
  }

  deleteClick(item){
    if(confirm('Você Deseja Deletar ?')){
      this.service.deleteFuncionario(item.FuncionarioId).subscribe(data=>{
        alert(data.toString());
        this.refreshFuncList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditFuncComp=false;
    this.refreshFuncList;
  }

  refreshFuncList(){
    this.service.getFuncList().subscribe(
      data=>{
        
        this.FuncionarioList=data;
        this.FuncionarioListWithoutFilter=data;
      }
     ); 
    }

    FilterFn(){
      var FuncionarioIdFilter = this.FuncionarioIdFilter;
      var NomeFuncionarioFilter = this.NomeFuncionarioFilter;
  
      this.FuncionarioList = this.FuncionarioListWithoutFilter.filter(function (el){
          return el.FuncionarioId.toString().toLowerCase().includes(
            FuncionarioIdFilter.toString().trim().toLowerCase()
          )&&
          el.NomeFuncionario.toString().toLowerCase().includes(
            NomeFuncionarioFilter.toString().trim().toLowerCase()
          )
      });
    }
  

    sortResult(prop ,asc){
      this.FuncionarioList = this.FuncionarioListWithoutFilter.sort(function(a,b){
        if(asc){
            return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
        }else{
          return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
        }
      })
    }
   
}
