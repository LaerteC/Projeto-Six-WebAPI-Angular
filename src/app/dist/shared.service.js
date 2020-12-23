"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedService = void 0;
var core_1 = require("@angular/core");
var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this.APIUrl = "http://localhost:5000/api";
        this.FotoUrl = "http://localhost:5000/fotos/";
    }
    // FUNCIONARIOS
    SharedService.prototype.getFuncList = function () {
        return this.http.get(this.APIUrl + '/Funcionario/');
    };
    SharedService.prototype.addFuncionario = function (val) {
        return this.http.post(this.APIUrl + '/Funcionario/', val);
    };
    SharedService.prototype.updateFuncionario = function (val) {
        return this.http.put(this.APIUrl + '/Funcionario/', val);
    };
    SharedService.prototype.deleteFuncionario = function (val) {
        return this.http["delete"](this.APIUrl + '/Funcionario/' + val);
    };
    // CLIENTES
    SharedService.prototype.getClienList = function () {
        return this.http.get(this.APIUrl + '/Cliente/');
    };
    SharedService.prototype.addCliente = function (val) {
        return this.http.post(this.APIUrl + '/Cliente/', val);
    };
    SharedService.prototype.updateCliente = function (val) {
        return this.http.put(this.APIUrl + '/Cliente/', val);
    };
    SharedService.prototype.deleteCliente = function (val) {
        return this.http["delete"](this.APIUrl + '/Cliente/' + val);
    };
    SharedService.prototype.UploadFoto = function (val) {
        return this.http.post(this.APIUrl + '/Cliente/SaveFile/', val);
    };
    SharedService.prototype.getAllFuncionariosNomes = function () {
        return this.http.get(this.APIUrl + '/Cliente/GetAllFuncionariosNomes/');
    };
    SharedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
