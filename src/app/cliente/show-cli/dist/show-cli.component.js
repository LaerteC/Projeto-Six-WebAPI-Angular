"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowcliComponent = void 0;
var core_1 = require("@angular/core");
var ShowcliComponent = /** @class */ (function () {
    function ShowcliComponent(service) {
        this.service = service;
        this.ClienteList = [];
        this.ActivateAddEditCliComp = false;
    }
    ShowcliComponent.prototype.ngOnInit = function () {
        this.refreshCliList();
    };
    ShowcliComponent.prototype.adicionarClick = function () {
        this.cli = {
            Id: 0,
            Nome: "",
            SobreNome: "",
            Cnpj: "",
            RazaoSocial: "",
            NomeFantasia: "",
            Email: "",
            Telefone: "",
            Data: "",
            PhotoFileName: "anoniii.png"
        };
        this.ModalTitulo = "Adicionar Cliente";
        this.ActivateAddEditCliComp = true;
    };
    ShowcliComponent.prototype.editarClick = function (item) {
        console.log(item);
        this.cli = item;
        this.ModalTitulo = "Editar Cliente";
        this.ActivateAddEditCliComp = true;
    };
    ShowcliComponent.prototype.deleteClick = function (item) {
        var _this = this;
        if (confirm(' Você Deseja Deletar ?')) {
            this.service.deleteCliente(item.id).subscribe(function (data) {
                alert(data.toString());
                _this.refreshCliList();
            });
        }
    };
    ShowcliComponent.prototype.closeClick = function () {
        this.ActivateAddEditCliComp = false;
        this.refreshCliList();
    };
    ShowcliComponent.prototype.refreshCliList = function () {
        var _this = this;
        this.service.getClienList().subscribe(function (data) {
            _this.ClienteList = data;
        });
    };
    ShowcliComponent = __decorate([
        core_1.Component({
            selector: 'app-show-cli',
            templateUrl: './show-cli.component.html',
            styleUrls: ['./show-cli.component.css']
        })
    ], ShowcliComponent);
    return ShowcliComponent;
}());
exports.ShowcliComponent = ShowcliComponent;
