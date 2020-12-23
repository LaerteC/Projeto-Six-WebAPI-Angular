

import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cli',
  templateUrl: './show-cli.component.html',
  styleUrls: ['./show-cli.component.css']
})
export class ShowcliComponent implements OnInit {

  constructor(private service:SharedService) { }

  ClienteList:any=[];

  ModalTitulo!:string;
  
  
  ActivateAddEditCliComp:boolean=false;
  cli:any;

  ngOnInit(): void {
    this.refreshCliList();
  }

  adicionarClick(){
    this.cli={
      Id:0,
      Nome:"",
      SobreNome:"",
      Cnpj:"",
      RazaoSocial:"",
      NomeFantasia:"",
      Email:"",
      Telefone:"",
      Data:"",
      PhotoFileName:"anoniii.png"
    }
    this.ModalTitulo="Adicionar Cliente";
    this.ActivateAddEditCliComp=true;
   

  }

  editarClick(item){
    console.log(item);
    this.cli=item;
    this.ModalTitulo="Editar Cliente";
    this.ActivateAddEditCliComp=true;
    
  }


  deleteClick(item){
    if(confirm(' Você Deseja Deletar ?')){
      this.service.deleteCliente(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshCliList();
       
      })
      
      
    }
    
  }

  closeClick(){
    this.ActivateAddEditCliComp=false;
    this.refreshCliList();
  }


  refreshCliList(){
    this.service.getClienList().subscribe(data=>{
      this.ClienteList=data;
    });
  }

}