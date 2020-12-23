import { Component, OnInit,Input } from '@angular/core';
import{SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-func',
  templateUrl: './add-edit-func.component.html',
  styleUrls: ['./add-edit-func.component.css']
})
export class AddEditFuncComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() func:any;
  FuncionarioId!:string
  NomeFuncionario!:string;

  ngOnInit(): void {
    this.FuncionarioId=this.func.FuncionarioId;
    this.NomeFuncionario=this.func.NomeFuncionario;
  }

  addFuncionario(){

    var val={
      FuncionarioId:this.FuncionarioId,
      NomeFuncionario:this.NomeFuncionario 
    };
    this.service.addFuncionario(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateFuncionario(){

    var val={
      FuncionarioId:this.FuncionarioId,
      NomeFuncionario:this.NomeFuncionario 
    };
    this.service.updateFuncionario
    (val).subscribe(res=>{
      alert(res.toString());
    });

  }
}

