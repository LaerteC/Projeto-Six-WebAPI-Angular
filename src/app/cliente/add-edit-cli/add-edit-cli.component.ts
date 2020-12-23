import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';



@Component({
  selector: 'app-add-edit-cli',
  templateUrl: './add-edit-cli.component.html',
  styleUrls: ['./add-edit-cli.component.css']
})
export class AddEditcliComponent implements OnInit {


  constructor(private service:SharedService) { }

  @Input() cli:any;
  id!:string;
  Nome!:string;
  SobreNome!:string;
  Cnpj!:string;
  RazaoSocial!:string;
  NomeFantasia!:string;
  Email!:string;
  Telefone!:string;
  Data!:string;
  FotoArquivo!:string;
  FotoFilePath!:string;


  FuncionariosList:any=[];

  ngOnInit(): void {
    this.loadFuncionarioList();
  }

  loadFuncionarioList(){
    this.service.getAllFuncionariosNomes().subscribe((data:any)=>{
      this.FuncionariosList=data;

      this.id=this.cli.id;
      this.Nome=this.cli.Nome;
      this.SobreNome=this.cli.SobreNome;
      this.Cnpj=this.cli.Cnpj;
      this.RazaoSocial=this.cli.RazaoSocial;
      this.NomeFantasia=this.cli.NomeFantasia;
      this.Email=this.cli.Email;
      this.Telefone=this.cli.Telefone;
      this.Data=this.cli.Datas;
      this.FotoArquivo=this.cli.FotoArquivo;
      this.FotoFilePath=this.service.FotoUrl+this.FotoArquivo;
     
    });
  }

  addCliente(){
    var val = { id:this.id,
                Nome:this.Nome,
                SobreNome:this.SobreNome,
                Cnpj:this.Cnpj,
                RazaoSocial:this.RazaoSocial,
                NomeFantasia:this.NomeFantasia,
                Email:this.Email,
                Telefone:this.Telefone,
                Data:this.Data,
                FotoArquivo:this.FotoArquivo};




    this.service.addCliente(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCliente() {
    var val = {   id:this.id,
                  Nome:this.Nome,
                  SobreNome:this.SobreNome,
                  Cnpj:this.Cnpj,
                  RazaoSocial:this.RazaoSocial,
                  NomeFantasia:this.NomeFantasia,
                  Email:this.Email,
                  Telefone:this.Telefone,
                  Data:this.Data,
                  FotoArquivo:this.FotoArquivo};

    this.service.updateCliente(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadFoto(event){  
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadFoto(formData).subscribe((data:any)=>{
      this.FotoArquivo=data.toString();
      this.FotoFilePath=this.service.FotoUrl+this.FotoArquivo;
    })
  }

}