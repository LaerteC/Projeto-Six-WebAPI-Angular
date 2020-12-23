"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddEditFuncComponent = void 0;
var core_1 = require("@angular/core");
var AddEditFuncComponent = /** @class */ (function () {
    function AddEditFuncComponent(service) {
        this.service = service;
    }
    AddEditFuncComponent.prototype.ngOnInit = function () {
        this.FuncionarioId = this.func.FuncionarioId;
        this.NomeFuncionario = this.func.NomeFuncionario;
    };
    AddEditFuncComponent.prototype.addFuncionario = function () {
        var val = {
            FuncionarioId: this.FuncionarioId,
            NomeFuncionario: this.NomeFuncionario
        };
        this.service.addFuncionario(val).subscribe(function (res) {
            alert(res.toString());
        });
    };
    AddEditFuncComponent.prototype.updateFuncionario = function () {
        var val = {
            FuncionarioId: this.FuncionarioId,
            NomeFuncionario: this.NomeFuncionario
        };
        this.service.updateFuncionario(val).subscribe(function (res) {
            alert(res.toString());
        });
    };
    __decorate([
        core_1.Input()
    ], AddEditFuncComponent.prototype, "func");
    AddEditFuncComponent = __decorate([
        core_1.Component({
            selector: 'app-add-edit-func',
            templateUrl: './add-edit-func.component.html',
            styleUrls: ['./add-edit-func.component.css']
        })
    ], AddEditFuncComponent);
    return AddEditFuncComponent;
}());
exports.AddEditFuncComponent = AddEditFuncComponent;
