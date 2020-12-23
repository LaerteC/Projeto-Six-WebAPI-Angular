"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowFuncComponent = void 0;
var core_1 = require("@angular/core");
var ShowFuncComponent = /** @class */ (function () {
    function ShowFuncComponent(service) {
        this.service = service;
        this.FuncionarioList = [];
        this.ActivateAddEditFuncComp = false;
        this.FuncionarioIdFilter = "";
        this.NomeFuncionarioFilter = "";
        this.FuncionarioListWithoutFilter = [];
    }
    ShowFuncComponent.prototype.ngOnInit = function () {
        this.refreshFuncList();
    };
    ShowFuncComponent.prototype.adicionarClick = function () {
        this.func = {
            FuncionarioId: 0,
            NomeFuncionario: ""
        };
        this.ModalTitulo = " Adicionar Funcionário ";
        this.ActivateAddEditFuncComp = true;
    };
    ShowFuncComponent.prototype.editClick = function (item) {
        this.func = item;
        this.ModalTitulo = " Editar Funcionários";
        this.ActivateAddEditFuncComp = true;
    };
    ShowFuncComponent.prototype.deleteClick = function (item) {
        var _this = this;
        if (confirm('Você Deseja Deletar ?')) {
            this.service.deleteFuncionario(item.FuncionarioId).subscribe(function (data) {
                alert(data.toString());
                _this.refreshFuncList();
            });
        }
    };
    ShowFuncComponent.prototype.closeClick = function () {
        this.ActivateAddEditFuncComp = false;
        this.refreshFuncList;
    };
    ShowFuncComponent.prototype.refreshFuncList = function () {
        var _this = this;
        this.service.getFuncList().subscribe(function (data) {
            _this.FuncionarioList = data;
            _this.FuncionarioListWithoutFilter = data;
        });
    };
    ShowFuncComponent.prototype.FilterFn = function () {
        var FuncionarioIdFilter = this.FuncionarioIdFilter;
        var NomeFuncionarioFilter = this.NomeFuncionarioFilter;
        this.FuncionarioList = this.FuncionarioListWithoutFilter.filter(function (el) {
            return el.FuncionarioId.toString().toLowerCase().includes(FuncionarioIdFilter.toString().trim().toLowerCase()) &&
                el.NomeFuncionario.toString().toLowerCase().includes(NomeFuncionarioFilter.toString().trim().toLowerCase());
        });
    };
    ShowFuncComponent.prototype.sortResult = function (prop, asc) {
        this.FuncionarioList = this.FuncionarioListWithoutFilter.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
    };
    ShowFuncComponent = __decorate([
        core_1.Component({
            selector: 'app-show-func',
            templateUrl: './show-func.component.html',
            styleUrls: ['./show-func.component.css']
        })
    ], ShowFuncComponent);
    return ShowFuncComponent;
}());
exports.ShowFuncComponent = ShowFuncComponent;
