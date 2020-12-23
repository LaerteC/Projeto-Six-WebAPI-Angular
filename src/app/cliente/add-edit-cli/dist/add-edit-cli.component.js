"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddEditcliComponent = void 0;
var core_1 = require("@angular/core");
var AddEditcliComponent = /** @class */ (function () {
    function AddEditcliComponent(service) {
        this.service = service;
        this.FuncionariosList = [];
    }
    AddEditcliComponent.prototype.ngOnInit = function () {
        this.loadFuncionarioList();
    };
    AddEditcliComponent.prototype.loadFuncionarioList = function () {
        var _this = this;
        this.service.getAllFuncionariosNomes().subscribe(function (data) {
            _this.FuncionariosList = data;
            _this.id = _this.cli.id;
            _this.Nome = _this.cli.Nome;
            _this.SobreNome = _this.cli.SobreNome;
            _this.Cnpj = _this.cli.Cnpj;
            _this.RazaoSocial = _this.cli.RazaoSocial;
            _this.NomeFantasia = _this.cli.NomeFantasia;
            _this.Email = _this.cli.Email;
            _this.Telefone = _this.cli.Telefone;
            _this.Data = _this.cli.Datas;
            _this.FotoArquivo = _this.cli.FotoArquivo;
            _this.FotoFilePath = _this.service.FotoUrl + _this.FotoArquivo;
        });
    };
    AddEditcliComponent.prototype.addCliente = function () {
        var val = { id: this.id,
            Nome: this.Nome,
            SobreNome: this.SobreNome,
            Cnpj: this.Cnpj,
            RazaoSocial: this.RazaoSocial,
            NomeFantasia: this.NomeFantasia,
            Email: this.Email,
            Telefone: this.Telefone,
            Data: this.Data,
            FotoArquivo: this.FotoArquivo };
        this.service.addCliente(val).subscribe(function (res) {
            alert(res.toString());
        });
    };
    AddEditcliComponent.prototype.updateCliente = function () {
        var val = { id: this.id,
            Nome: this.Nome,
            SobreNome: this.SobreNome,
            Cnpj: this.Cnpj,
            RazaoSocial: this.RazaoSocial,
            NomeFantasia: this.NomeFantasia,
            Email: this.Email,
            Telefone: this.Telefone,
            Data: this.Data,
            FotoArquivo: this.FotoArquivo };
        this.service.updateCliente(val).subscribe(function (res) {
            alert(res.toString());
        });
    };
    AddEditcliComponent.prototype.uploadFoto = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var formData = new FormData();
        formData.append('uploadedFile', file, file.name);
        this.service.UploadFoto(formData).subscribe(function (data) {
            _this.FotoArquivo = data.toString();
            _this.FotoFilePath = _this.service.FotoUrl + _this.FotoArquivo;
        });
    };
    __decorate([
        core_1.Input()
    ], AddEditcliComponent.prototype, "cli");
    AddEditcliComponent = __decorate([
        core_1.Component({
            selector: 'app-add-edit-cli',
            templateUrl: './add-edit-cli.component.html',
            styleUrls: ['./add-edit-cli.component.css']
        })
    ], AddEditcliComponent);
    return AddEditcliComponent;
}());
exports.AddEditcliComponent = AddEditcliComponent;
