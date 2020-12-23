"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var funcionario_component_1 = require("./funcionario/funcionario.component");
var show_func_component_1 = require("./funcionario/show-func/show-func.component");
var add_edit_func_component_1 = require("./funcionario/add-edit-func/add-edit-func.component");
var cliente_component_1 = require("./cliente/cliente.component");
var show_cli_component_1 = require("./cliente/show-cli/show-cli.component");
var add_edit_cli_component_1 = require("./cliente/add-edit-cli/add-edit-cli.component");
var shared_service_1 = require("./shared.service");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                funcionario_component_1.FuncionarioComponent,
                show_func_component_1.ShowFuncComponent,
                add_edit_func_component_1.AddEditFuncComponent,
                cliente_component_1.ClienteComponent,
                show_cli_component_1.ShowcliComponent,
                add_edit_cli_component_1.AddEditcliComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [shared_service_1.SharedService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
